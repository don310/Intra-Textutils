import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    try {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to clipboard!", "success");
    } catch (error) {
      console.log("Failed to copy:", error);
      props.showAlert("Failed to copy text!", "danger");
    }
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 " onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 mt-2 mb-2 " onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 " onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-primary mx-1 " onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-1 mt-2 mb-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split("").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
