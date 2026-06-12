import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <button onClick={() => navigate("/adoptionform")}>
        ⬅ Back
      </button>

      <h1>✅ Pet Adopted Successfully</h1>

      <button onClick={() => navigate("/adoptedpet")}>
        View Adopted Pet
      </button>
    </div>
  );
}

export default Success;