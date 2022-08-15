import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [Color, setColor] = useState("");
  const [Change, setChange] = useState();

  return (
    <div className="App">
      <h1>Color Changer App</h1>
      <div className="color-background" style={{ boxShadow: `10px 10px 50px 20px black`, backgroundColor: `${Color}` }}></div>
      <input type="text" placeholder="Type your color or Rgb code" onChange={(e) => setChange(e.target.value)} />
      <button className="changeBtn" onClick={() => setColor(Change)}>change color</button>
    </div>
  );
};