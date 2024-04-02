import { useVeltClient } from "@veltdev/react";
import { useEffect, useState } from "react";

export default function YourAuthComponent() {
  let [user, setUser] = useState(null);

  // Get the Velt Client
  const { client } = useVeltClient();

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

  const generateUser = (randomNum, visibility = null) => {
    const email = names[randomNum].split(" ")[0] + names[randomNum].split(" ")[1] + "@velt.com";
    const photoURL = "https://i.pravatar.cc/30" + randomNum + `?u=user${randomNum}@velt.dev`;

    return {
      uid: "user" + randomNum,
      displayName: names[randomNum],
      email: email,
      photoURL: photoURL,
      ...(visibility && { visibility: visibility })
    };
  };

  const userService = () => {
    let user;
    if (!localStorage.getItem("user")) {
      let randomNum = Math.floor(Math.random() * 10);
      const generatedUser = generateUser(randomNum);
      const { uid, displayName, email, photoURL } = generatedUser;
      user = {
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
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      user = JSON.parse(localStorage.getItem("user"));
    }
    return user;
  };

  const getContact = (num) => {
    return generateUser(num, "group");
  };

  // Fetch user data from user service
  let yourAuthenticatedUser = userService();


  const initVelt = async () => {
    if (client && yourAuthenticatedUser) {

      // Identify the user with the Velt client
      await client.identify(yourAuthenticatedUser);
      setUser(yourAuthenticatedUser);
    }
  };

  useEffect(() => {
    initVelt();
  }, [client]);

  return <div></div>;
}