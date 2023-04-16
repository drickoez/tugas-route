import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("../home", { replace: true });

  return (
    <div>
      <h1>Ini Halaman Contact</h1>
      <button onClick={handleClick}>Back to home</button>
    </div>
  );
};

export default Contact;
