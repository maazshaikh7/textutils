// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import React, { useState } from "react";
import {Routes, Route,} from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "hsl(127, 0%, 31%)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About-us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container">
      <Routes>
        <Route path="/" element={ <Home mode={mode}/> } />
        <Route path="about" element={<About mode={mode} heading ="About us"/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
