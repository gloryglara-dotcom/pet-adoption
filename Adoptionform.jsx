import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Adoptionform() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const submitForm = () => {
    localStorage.setItem("username", name);
    navigate("/success");
  };

  return (
    <div className="container">
      <button onClick={() => navigate("/pets")}>⬅ Back</button>

      <h1>Adoption Form</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <button onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}

export default Adoptionform;