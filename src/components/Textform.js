import React, { useState } from "react";

export default function Textform(props) {
  // Function to convert text in textarea to uppercase
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  // Event handler to set the text value in 'setText'
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container my-5">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
          ></textarea>
          <button className="btn btn-primary my-3" onClick={handleUpClick}>
            Convert to uppercase
          </button>
        </div>
      </div>
    </>
  );
}
