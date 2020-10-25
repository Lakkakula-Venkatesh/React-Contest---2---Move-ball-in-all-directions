import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: x + "px",
    top: y + "px"
  });
  const reset = () => {};
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
  const handleClick = (event) => {
    if (event.keyCode === 37) {
      //Left
    } else if (event.keyCode === 38) {
      //Up
    } else if (event.keyCode === 39) {
      //Right
    } else if (event.keyCode === 40) {
      //Down
    }
  };
  const buttonClickHandler = () => {
    setRenderBall(!renderBall);
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
