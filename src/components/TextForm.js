import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');
    // console.log("text: ", text);
    const handleUpClick = () => {
        // console.log('uppercase clicked!!' + text);
        let newText = text.toUpperCase();
        // setText('You have clicked on handleUpClick');
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Cleared!", "success");
    }

    const handleCapClick = () => {
        let sentance = text.toLowerCase().split(" ");
        for (let i = 0; i < sentance.length; i++) {
            sentance[i] = sentance[i][0].toUpperCase() + sentance[i].slice(1);
        }
        let newText = sentance.join(" ");
        setText(newText);
        props.showAlert("Converted to Capitalize!", "success");
    }

    const handleSpeak = (event) => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleCopy = () => {
        // console.log('in handleCopy')
        let copiedText = document.getElementById('myBox');
        copiedText.select();
        navigator.clipboard.writeText(copiedText.value);
        props.showAlert("Copied!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        // console.log('on changed');
        setText(event.target.value);
    }

    return (
        <>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : (props.mode === 'danger' ? 'white' : (props.mode === 'warning' ? 'white' : 'black'))}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' || props.mode === 'danger' || props.mode === 'warning' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : (props.mode === 'danger' ? 'white' : (props.mode === 'warning' ? 'white' : 'black'))}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCapClick}>Convert to TitleCase</button>
                <button className="btn btn-primary mx-1" onClick={handleSpeak}>Speak</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : (props.mode === 'danger' ? 'white' : (props.mode === 'warning' ? 'white' : 'black'))}}>
                <h2>You text summary:</h2>
                <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} in minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your text to preview here.."}</p>
            </div>
        </>

    )
}
