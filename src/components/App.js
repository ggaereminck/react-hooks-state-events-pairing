import { useState } from "react";
import VideoContainer from "./VideoContainer"
import CommentContainer from "./CommentContainer"

function App() {
  const [isVisible, setIsVisible] = useState(true)
  
  return (
    <div className="App">
      <VideoContainer/>
      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide Comments' : 'Show Comments'}</button>
      {isVisible ? <CommentContainer/> : null}
    </div>
  );
}

export default App;
