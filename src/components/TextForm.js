import React, { useState } from "react";
// import PropTypes from 'prop-types'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('converted to Uppercase','success');
    };
    const handleLoClick = () => {
        // console.log("lowercase is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('converted to Lowercase','success');
    };
    const handleCopy = () => {
        let newText = document.getElementById('myBox')
        newText.select()
        navigator.clipboard.writeText(newText.value)
        // document.getSelection().removeAllRanges();
    };
    const removeExtraSpaces = () => {
       let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    };
    const handleClearClick = () => {
        // console.log("clear is clicked" + text);
        // let newText = text.toLowerCase();
        setText('');
        props.showAlert('Text is cleared','success');
    };
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        style={{backgroundColor: props.mode==='dark'?'#277dc6':'white',color: props.mode ==='dark'?'white':'black'}}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="10"
                    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>
                    convert to uppercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleLoClick}>
                    convert to lowercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear text
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleCopy}>
                     Copytext
                </button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={removeExtraSpaces}>
                     Remove extra spaces
                </button>
            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h2>your text summary</h2>
                <p>
                    {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing to preview here!'}</p>
            </div>
        </>
    );
}
