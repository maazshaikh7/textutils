import React, { useState } from "react";

export default function Textform(props) {

  const [text, setText] = useState("Enter text here");
  const avgReadTime = (0.15 * text.split(" ").length).toFixed(2) + " seconds";
  let numberOfWords = text.split(" ").length;

  // Function to convert text in textarea to uppercase
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  // Function to convert text in textarea to lowercase
  const handleLowerClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  // Function to convert text in textarea to lowercase
  const handleClearClick = () => {
    const newText = "";
    setText(newText);
  };

  // Event handler to set the text value in 'setText'
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
 
  return (
    <>
      <div className="container my-5">
        <h1 style={{color : props.mode === "dark"? "white": "black"}}>{props.heading} </h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            style={{backgroundColor : props.mode === "dark"? "darkgrey": "white"}}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
          ></textarea>
          <button className="btn btn-primary m-3" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary m-3" onClick={handleLowerClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-danger m-3" onClick={handleClearClick}>
            Clear text
          </button>
        </div>
      </div>
      <div className="container my-3">
        <hr style={{color : props.mode === "dark"? "white": "black"}}/>
        <h1 className="my-3" style={{color : props.mode === "dark"? "white": "black"}}>Your text summary</h1>
        <p style={{color : props.mode === "dark"? "white": "black"}}>
          {numberOfWords} words and {text.length} characters
        </p>
        <p style={{color : props.mode === "dark"? "white": "black"}}>Average reading time for the given text is around {avgReadTime}</p>
        <hr/>
      </div>
    </>
  );
}
