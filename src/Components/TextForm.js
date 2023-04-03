import React from 'react'
import { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState('');

    const toggleUp = () => {
        // var selectedText = window.getSelection().toString();
        // // console.log(selectedText);
        // setText(text + selectedText.toUpperCase());



        const newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UPPERCASE!", "success")
    
    }
    const toggleLow = () => {
        const newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")

    }
    const clear = () => {
        const newText = ""
        setText(newText)
        props.showAlert("CLEAR!!", "success")

    }
    const onChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
        // let text = document.getElementById('myBox');
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        document.getSelection()
        document.execCommand("copy");
        document.getSelection().removeAllRanges();
        props.showAlert("COPIED!!", "success")

    }
    const handlePaste = () => {

        let text = document.getElementById('myBox');
        navigator.clipboard.readText().then((PasteText) => {

            setText(text.value = text.value + " " + PasteText)
            props.showAlert("PASTED!!", "success")

        })


    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(''));
        props.showAlert("REMOVED!!", "success")

    }

    const handleCut = () => {
        document.getSelection().deleteFromDocument();
        props.showAlert("CUTED!!", "success")
        document.getSelection().removeAllRanges();
    }
    const handleCutPaste = () => {
        document.getSelection();
        document.execCommand("copy");
        document.execCommand("cut");
    }

    const removeNum = () => {
        let text = document.getElementById('myBox').value;
        let newText = text.replace(/\d+/g, '');
        // let newText = text.replace(/[^a-zA-Z ]/g, "");  
        newText = newText.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert("REMOVED-NUMBERS!!", "success")

    }
    const handleSpecialChar = () => {
        let text = document.getElementById('myBox').value;
        // let newText = text.replace(/\d+/g, '');  
        let newText = text.replace(/[^a-zA-Z ]/g, "");
        newText = newText.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert("REMOVED-SPECIAL-CHARfnpm!!", "success")
    }
    const localUpper = () => {
        let text = document.getElementById('myBox').value;
        let capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        let capitalizeWord = (str) => str.split(' ').map(capitalize).join(' ');
        setText(capitalizeWord(text));
        props.showAlert("SplitUpperCase!!", "success")

    }

    return (
        <>
            <div className='container'>
                <h1 className="mb-3" style={{ color: props.mode === "light" ? "black" : "white" }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "light" ? "white" : "#13466e", color: props.mode === "light" ? "black" : "white" }} onChange={onChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={toggleUp}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={toggleLow}>Convert to lowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={clear}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handlePaste}>Paste</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 " onClick={handleExtraSpaces}>Romove Space</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 " onClick={handleCut}>CutText</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 " onClick={handleCutPaste}>CutPaste</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 " onClick={removeNum}>Remove Num</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 " onClick={localUpper}>Split UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 " onClick={handleSpecialChar}>Remove Special Char</button>
            </div >
            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>Your Text Summery</h1>
                <p>{text.length} Character</p>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words</p >
                <p> {0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something in the above box to preview here"}</p>
            </div>
        </>

    )
}

export default TextForm