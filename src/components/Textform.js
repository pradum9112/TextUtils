import React ,{useState} from 'react'


export default function Textform(props) {
    const HandleUpClick=() =>{
     //console.log("UpperCase was Clicked"+text); 
     let newText = text.toUpperCase()
    //  setText("You have clicked on handleUpClick ")
         setText(newText)
         props.showAlert("Converted to uppercase!","success")

    }
    const HandleLoClick=() =>{
       // console.log("UpperCase was Clicked"+text); 
        let newText = text.toLowerCase()
       //  setText("You have clicked on handleLoClick ")
            setText(newText)
           props.showAlert("Converted to lowercase!","success")
   }

    const HandleOnChange=(event) =>{
        console.log("OnChange"); 
        setText(event.target.value)
       } 

    const HandleCopy=() =>{
    console.log("I am copy"); 
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard!","success")

    } 


    const HandleExtraSpaces=()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!","success")

    }
    const HandleclearClick=() =>{
        let newText = ' '
            setText(newText)
            props.showAlert("Text clear!","success")
   
       }
    const [text, setText] = useState('Enter text here');
    // text = 'NewText'; wrong way to chnage the State
    //setText("NewText"); Correect way to change the State


    return (
    <>
    <div className="conatainer" style={{color: props.mode === 'dark'?'white':'black'}}>
        
            <h1>{props.heading}</h1>
            
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" id="myBox" value={text} onChange={HandleOnChange} 
                style={{backgroundColor: props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} rows="8">
                </textarea>
            </div>

            <button className="btn btn-primary mx-1" onClick={HandleUpClick}>
                Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={HandleLoClick}>
                Convert To Lowercase</button>
            
            <button className="btn btn-primary mx-1" onClick={HandleCopy}>
                Copy Text</button>        
            <button className="btn btn-primary mx-1" onClick={HandleExtraSpaces}>
                Remove Extra Spaces</button>

            <button className="btn btn-primary mx-1" onClick={HandleclearClick}>
                Clear Text</button> 

    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length } characters</p>
        <p>{0.0033 * text.split(" ").length} Minutes takes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p> 
    </div>
       
    </>
  )
}
