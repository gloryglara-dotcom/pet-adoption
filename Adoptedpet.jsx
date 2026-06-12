import React from "react";
import { useNavigate } from "react-router-dom";

function Adoptedpet() {
  const navigate = useNavigate();

  const pet = localStorage.getItem("pet");
  const user = localStorage.getItem("username");

  return (
    <div className="container">
      <button onClick={() => navigate("/success")}>
        ⬅ Back
      </button>

      <h1>🎉 Adoption Details</h1>

      <div className="card">
        <h2>Name : {user}</h2>
        <h2>Pet : {pet}</h2>
      </div>
    </div>
  );
}

export default Adoptedpet;