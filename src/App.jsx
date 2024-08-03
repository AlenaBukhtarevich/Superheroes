import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroGallery from "./components/HeroGallery";

function App() {
  return (
    <div className="app">
      <h1>Галерея Супергероев</h1>
      <HeroGallery />
    </div>
  );
}

export default App;
