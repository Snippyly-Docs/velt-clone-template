import { VeltProvider, VeltComments, VeltCommentsSidebar, VeltCursor, VeltHuddle} from '@veltdev/react';
import YourAuthComponent from './components/YourAuthComponent';
import YourDocument from './components/YourDocument';

function App() {


  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <VeltHuddle/>
      <VeltCursor />
      <VeltComments allowedElementIds={['editor']} textMode={true} sidebarButtonOnCommentDialog={true} autoCategorize={true}/>
      <VeltCommentsSidebar />
      <YourAuthComponent/>
      <YourDocument/>
    </VeltProvider>

  );
}

export default App;

