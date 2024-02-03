import { useVeltClient } from "@veltdev/react";
import { useEffect, useState } from "react";

export default function YourAuthComponent() {
  let [user, setUser] = useState(null);

  const userService = () => {
    let randomNum = Math.floor(Math.random() * 10);
    const names = [
        "Michael Scott",
        "Dwight Schrute",
        "Jim Halpert",
        "Pam Beesly",
        "Ryan Howard",
        "Andy Bernard",
        "Robert California",
        "Stanley Hudson",
        "Kevin Malone",
        "Meredith Palmer",
      ];
      
    return {
      uid: "user" + randomNum,
      displayName: names[randomNum],
      email: names[randomNum].split(" ")[0] + names[randomNum].split(" ")[1] + "@trysnippyly.com",
      photoURL: "https://i.pravatar.cc/30" + randomNum + `?u=user${randomNum}@velt.dev`
    };
  };

  const getContact = (num) => {
    let randomNum = num
    const names = [
        "Michael Scott",
        "Dwight Schrute",
        "Jim Halpert",
        "Pam Beesly",
        "Ryan Howard",
        "Andy Bernard",
        "Robert California",
        "Stanley Hudson",
        "Kevin Malone",
        "Meredith Palmer",
      ];
      
    return {
      userId: "user" + randomNum,
      name: names[randomNum],
      email: names[randomNum].split(" ")[0] + names[randomNum].split(" ")[1] + "@gmail.com",
      photoURL: "https://i.pravatar.cc/30" + randomNum + `?u=user${randomNum}@velt.dev`,
      visibility: "group"
    };
  };

  // Fetch user data from user service
  let yourAuthenticatedUser = userService();

  // Get the Velt Client
  const { client } = useVeltClient();

  useEffect(() => {
    const initVelt = async () => {
      if (client && yourAuthenticatedUser) {
        const { uid, displayName, email, photoURL } = yourAuthenticatedUser;

        // Create the Velt user object
        let user = {
          userId: uid,
          name: displayName,
          email: email,
          photoUrl: photoURL,
          groupId: "theoffice",
        };
        user.contacts = [
            getContact(0),
            getContact(1),
            getContact(2),
            getContact(3),
            getContact(4),
            getContact(5),
            getContact(6),
            getContact(7),
            getContact(8),
            getContact(9)
          ]
    
        // Identify the user with the Velt client
        await client.identify(user);
        setUser(user);
      }
    };
    initVelt().catch(console.error);
  }, [client]);

  return <div></div>;
}
