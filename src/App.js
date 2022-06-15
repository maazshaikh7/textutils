// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "hsl(127, 0%, 31%)"
    } else {
      setMode("light")      
      document.body.style.backgroundColor = ""
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About-us" mode= {mode} toggleMode = {toggleMode}/>
      <Textform heading = "Enter the text to analyze" mode= {mode}/>
    </>
  );
}

export default App;
