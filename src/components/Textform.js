import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter text here");
  const numberOfWords = text.split(/\s+/).filter((element) => element).length;
  const avgReadTime = numberOfWords * 0.25;
  const approxReadTime = avgReadTime.toFixed(2) + " seconds";
  const myStyle = { color: props.mode === "dark" ? "white" : "black" };

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
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  
  // Function to remove extra spaces in textarea
  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/)
    setText(newText.join(" "));
  };

  // Function to clear text 
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
        <h1 style={myStyle}>{props.heading} </h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "darkgrey" : "white",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
          ></textarea>
          <button className="btn btn-primary mt-3 mx-1" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mt-3 mx-1" onClick={handleLowerClick}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mt-3 mx-1" onClick={handleExtraSpaces}>
            Remove extra spaces 
          </button>
          <button className="btn btn-success mt-3 mx-1" onClick={handleCopy}>
            Copy text
          </button>
          <button className="btn btn-danger mt-3 mx-1" onClick={handleClearClick}>
            Clear text
          </button>
        </div>
      </div>
      <div className="container my-3">
        <hr style={myStyle} />
        <h1 className="my-3" style={myStyle}>
          Your text summary
        </h1>
        <p style={myStyle}>
          {numberOfWords} words and {text.length} characters
        </p>
        <p style={myStyle}>
          Average reading time for the given text is around {approxReadTime}
        </p>
        <hr />
      </div>
    </>
  );
}
