import React from "react";
import Robot from "../assets/logo.png";
import "./welcome.css";

function Welcome({ currentUser }) {
  return (
    <div className="container-welcome">
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome! <span>{currentUser.username}</span>
      </h1>
      <h3>Please select a friend to start!</h3>
    </div>
  );
}

export default Welcome;
