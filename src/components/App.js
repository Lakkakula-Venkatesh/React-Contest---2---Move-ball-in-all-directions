import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  let [ballPosition, setBallPosition] = React.useState({
    left: 0,
    top: 0
  });
  const reset = () => {
    setBallPosition({left: 0, top: 0});
  };
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button className="start" onClick={buttonClickHandler}>
          Click For One Ball
        </button>
      );
  };
  
  const handleClick = function (event) {
    // const {left, top} = posi;
    if (event.keyCode === 37) {
      //Left
      ballPosition = {
        left: ballPosition.left - 5,
        top: ballPosition.top
      }
      setBallPosition(ballPosition);   
    } else if (event.keyCode === 38) {
      //Up
      ballPosition = {
        left: ballPosition.left,
        top: ballPosition.top - 5
      }
      setBallPosition(ballPosition);
    } else if (event.keyCode === 39) {
      //Right
      ballPosition = {
        left: ballPosition.left + 5,
        top: ballPosition.top
      }
      setBallPosition(ballPosition);
    } else if (event.keyCode === 40) {
      //Down
      ballPosition = {
        left: ballPosition.left,
        top: ballPosition.top + 5
      }
      setBallPosition(ballPosition);
    }
  };

  const buttonClickHandler = () => {
    setRenderBall(true);
    document.addEventListener("keydown", handleClick);
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
