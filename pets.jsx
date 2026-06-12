import React from "react";
import { useNavigate } from "react-router-dom";

import dog from "../assets/dog.jpg";
import dog5 from "../assets/dog5.jpg";

import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat5 from "../assets/cat5.jpg";

import parrot2 from "../assets/parrot2.jpg";
import lovebirds from "../assets/lovebirds.jpg";

function Pets() {
  const navigate = useNavigate();

  const adoptPet = (pet) => {
    localStorage.setItem("pet", pet);
    navigate("/adoptionform");
  };

  return (
    <div className="container">
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h1>Available Pets</h1>

      <h2>🐶 Dogs</h2>
      <div className="pet-container">
        <div className="pet-card">
          <img src={dog} alt="dog" />
          <button onClick={() => adoptPet("Dog")}>Adopt</button>
        </div>

        <div className="pet-card">
          <img src={dog5} alt="dog5" />
          <button onClick={() => adoptPet("Dog")}>Adopt</button>
        </div>
      </div>

      <h2>🐱 Cats</h2>
      <div className="pet-container">
        <div className="pet-card">
          <img src={cat1} alt="cat1" />
          <button onClick={() => adoptPet("Cat")}>Adopt</button>
        </div>

        <div className="pet-card">
          <img src={cat2} alt="cat2" />
          <button onClick={() => adoptPet("Cat")}>Adopt</button>
        </div>

        <div className="pet-card">
          <img src={cat5} alt="cat5" />
          <button onClick={() => adoptPet("Cat")}>Adopt</button>
        </div>
      </div>

      <h2>🦜 Birds</h2>
      <div className="pet-container">
        <div className="pet-card">
          <img src={parrot2} alt="parrot2" />
          <button onClick={() => adoptPet("Parrot")}>Adopt</button>
        </div>

        <div className="pet-card">
          <img src={lovebirds} alt="lovebirds" />
          <button onClick={() => adoptPet("Love Birds")}>Adopt</button>
        </div>
      </div>
    </div>
  );
}

export default Pets;