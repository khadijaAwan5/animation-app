import React, {useRef, useEffect} from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
 // const element = useRef(null);

  const { ref, playState,getAnimation } = useWebAnimations({
    keyframes: [
      {transform: "translate(0,0)"},
      {transform: "translate(600%,0)"},
    ],
    timing: {
      //delay: 2000, // Start with a 500ms delay
      duration: 3000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
    onReady: ({ playState, animate, animation }) => {
      // Triggered when the animation is ready to play (Google Chrome: available in v84+)
    },
    onUpdate: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the running state or changes state
    },
    onFinish: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
    },
    // More useful options...
  });

  return (
    <div>
     <div className="target" ref={ref}> </div>
     current animation state: {playState}
     <button onClick={() => getAnimation().pause()}>Pause</button>
     <button onClick={() => getAnimation().play()}>play</button>
    </div>
  );
}

export default App;
