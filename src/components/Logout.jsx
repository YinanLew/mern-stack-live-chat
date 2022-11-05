import React from "react";
import { useNavigate } from "react-router-dom";
import "./logout.css";

function Logout() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.clear();
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
