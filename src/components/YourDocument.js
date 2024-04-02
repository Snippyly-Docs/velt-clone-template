import { useVeltClient, VeltSidebarButton, VeltCommentTool, VeltHuddleTool, VeltPresence } from '@veltdev/react';
import { useEffect, useState } from 'react';



export default function YourDocument() {

  // Get the Velt client
  const { client } = useVeltClient();

  useEffect(() => {
    if (client) {
      // Set a document ID
      client.setDocumentId('unique-demo-id');

      //Set Dark Mode
      //client.setDarkMode(true)

      //Enable Live Selection
      const selectionElement = client.getSelectionElement();
      selectionElement.enableLiveSelection();


      const commentElement = client.getCommentElement();
      //Remove border on cell comments
      //commentElement.disableCommentPinHighlighter();
      //Remove dialog on Hover
      //commentElement.disableDialogOnHover();

    }
  }, [client]);

  return (
   <div style={{ display:"flex", gap:"8px", marginRight:"16px"}}>
     <VeltPresence self={true} flockMode={true}/>
     <VeltHuddleTool/>
     <VeltCommentTool/>
     <VeltSidebarButton/>
   </div>
  );
}
