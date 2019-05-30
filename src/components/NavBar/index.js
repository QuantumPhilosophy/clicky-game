import React from "react";
import "./style.css";

function NavBar(props) {
  return <div className="nav">
    <div><p>Losses: {props.losses}</p></div>
    <div><p>Current Score: {props.currentScore}</p></div>
    <div><p>High Score: {props.highScore}</p></div>
  </div>
}

export default NavBar;
