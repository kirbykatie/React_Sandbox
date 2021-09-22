import React from "react";
import "./App.css";

function App() {
  const handleSquareClick = () => {
    console.log("square clicked");
  };

  const handleCircleClick = () => {
    console.log("circle clicked");
  };

  const handleSquareMouseOver = () => {
    console.log("mouseover square");
  };

  return (
    <div className="App">
      <img
        useMap="#shapes-map-rect"
        src="https://html.com/wp-content/uploads/shapes.png"
        alt=""
      />
      <map name="shapes-map-rect">
        <area
          shape="rect"
          alt="Square"
          coords="19,28,222,228"
          // href="https://google.com"
          // target="_blank"
          onClick={handleSquareClick}
          onMouseOver={handleSquareMouseOver}
          className="area"
        />
        <area
          shape="circle"
          alt="Circle"
          coords="361,132,96"
          onClick={handleCircleClick}
          className="area"
        />
      </map>
    </div>
  );
}

export default App;
