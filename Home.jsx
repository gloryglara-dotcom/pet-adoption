import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>🐾 Pet Adoption Center</h1>
      <h2>Find Your Perfect Pet Friend</h2>

      <button onClick={() => navigate("/pets")}>
        View Pets
      </button>

      <button onClick={() => navigate("/search")}>
        Search Pets
      </button>
    </div>
  );
}

export default Home;