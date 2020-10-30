import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(5);
  const [y, setY] = useState(5);
  let posi = {
    left: 0,
    top: 0
  };
  const [ballPosition, setBallPosition] = useState(posi);
  const reset = () => {
    document.location.reload();
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
    
    if (event.keyCode === 37) {
      //Left
      // const position =
      setBallPosition({
        left: ballPosition.left - 5,
        top: ballPosition.top
      });
      setX(x-5);
    } else if (event.keyCode === 38) {
      //Up
      // const position =
      setBallPosition({
        left: ballPosition.left,
        top: ballPosition.top - 5
      });
      setY(y - 5);
    } else if (event.keyCode === 39) {
      //Right
      // const position =
      setBallPosition({
        left: ballPosition.left + 5,
        top: ballPosition.top
      });
      setX(x + 5);
    } else if (event.keyCode === 40) {
      //Down
      // const position =
      setBallPosition({
        left: ballPosition.left,
        top: ballPosition.top + 5
      });
      setY(y + 5);
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
