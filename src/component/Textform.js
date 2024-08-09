import React, {useState}  from 'react'


export default function Textform(props) {
  const handleClick = ()=>{
    let newText = text.toUpperCase();
setText(newText)
  } 
  const handleLowerCase = ()=>{
    let newText = text.toLowerCase();
setText(newText)
  } 
  const handleOnChange = (event)=>{
    setText(event.target.value);

  } 
  const [text, setText]  = useState('Enter text value');
  var text1 = text.substring(text.length - 1);
  var text2;
  if(text1 ===" "){
    text2=text.split(" ").length -1;
    }else{
      text2 =text.split(" ").length;
    }
  return (<>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        {/* <h1>{props.heading} </h1> */}
<div className="mb-3">
  {/* <label for="my-text" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} id="my-text" rows="8"></textarea>

  </div>
<button className="btn btn-primary mx-1" onClick={handleClick}>convert to upper case</button>
<button className="btn btn-primary mx-1" onClick={handleLowerCase}>convert to LowerCase case</button>
</div>
   
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text2} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} MInutes to read</p>
      <h2> Preview</h2>
      <p>{text}</p>





      
    </div>
    </>
  )
}
