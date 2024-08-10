import React, { useState } from 'react'
import  About1  from './component/About1'
import Navbar from './component/Navbar'
// import { Navbar } from 'react-bootstrap'
import Textform from './component/Textform'
import Alert from './component/Alert'
// import { type } from '@testing-library/user-event/dist/type'
// import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() 
{
  const[mode,setMode]=useState('dark');
  const[alert,setAlert] = useState(null);
  const showAlert = (message, type) =>{
setAlert({
  msg: message,
  type: type
})
setTimeout(()=>{
  setAlert(null);

},3000)
  }




 const toggleMode = ()=>{
    if(mode==='light'){
      document.body.style.backgroundColor = 'black';
    setMode("dark");
      showAlert("dark mode has been enabloe","success")
  }
    else{
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabloe","success")
      setMode("light");}

  }


  return (
    <div>
        {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}></Alert>
      <div className='container my-3'>
         <Textform mode={mode}/>
      <About1/> 

      </div>

    
      {/* <Routes>
        <Route path="/textform" element={<Textform/>} />
        
        <Route path="/About1" element={<About1/>} />
      </Routes>
    </BrowserRouter> */}
    </div>
  )
}

export default App
