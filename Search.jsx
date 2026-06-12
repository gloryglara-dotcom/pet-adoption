import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  const pets = ["Dog", "Cat", "Rabbit", "Parrot", "Hamster"];

  const [search, setSearch] = useState("");

  const result = pets.filter((pet) =>
    pet.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h1>Search Pets</h1>

      <input
        type="text"
        placeholder="Search Pet"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {result.map((pet, index) => (
        <div className="card" key={index}>
          <h2>{pet}</h2>
        </div>
      ))}
    </div>
  );
}

export default Search;