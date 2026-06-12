import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pets from "./pages/pets";
import Search from "./pages/Search";
import Adoptionform from "./pages/Adoptionform";
import Success from "./pages/Success";
import Adoptedpet from "./pages/Adoptedpet";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/search" element={<Search />} />
        <Route path="/adoptionform" element={<Adoptionform />} />
        <Route path="/success" element={<Success />} />
        <Route path="/adoptedpet" element={<Adoptedpet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;