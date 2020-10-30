import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [ballPosition, setBallPosition] = React.useState({
    left: 0,
    top: 0
  });
  const reset = () => {
    setBallPosition((prevState) => {
      return { ...prevState, left: 0, top: 0 };
    });
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
      setBallPosition((prevState) => {
        return { ...prevState, left: prevState.left - 5, top: prevState.top };
      });
    } else if (event.keyCode === 38) {
      //Up
      setBallPosition((prevState) => {
        return { ...prevState, left: prevState.left, top: prevState.top - 5 };
      });
    } else if (event.keyCode === 39) {
      //Right
      setBallPosition((prevState) => {
        return { ...prevState, left: prevState.left + 5, top: prevState.top };
      });
    } else if (event.keyCode === 40) {
      //Down
      setBallPosition((prevState) => {
        return { ...prevState, left: prevState.left, top: prevState.top + 5 };
      });
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
