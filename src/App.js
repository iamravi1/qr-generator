import './App.css';
import {useState} from "react";
import { QRCodeSVG } from 'qrcode.react';
import pic from "./qr.jpeg";


function App() {

  
  const [qrCode,setQrCode] = useState();
  const [mouseOver,setMouseOver] = useState(false);

  function gotoURL(){
  
    const url='http://'+qrCode;
     
      window.open(url,'_blank','noopener,noreferrer');
  }

  return (
    <div className="App">
    <div className="container">
    <h1>Enter the URL</h1>
    
    <input type="text" placeholder="Enter web" 
    onChange={(e)=>{
      setQrCode(e.target.value)
    }}
    />
    
    {qrCode ? <QRCodeSVG className="qr" value={qrCode}  /> : <img src={pic} alt="icon"/>  }
    {!qrCode ?  <h1><span class="material-symbols-outlined">
      qr_code_scanner
</span></h1> :
<button onClick={gotoURL}
onMouseOver={()=>{
  setMouseOver(true);
}}
onMouseOut={()=>{
  setMouseOver(false)
}}
style={{backgroundColor: mouseOver ? "black":"#FFE5F1",color:mouseOver ? "white":"black"}}
>GO!</button>}
    </div>
    </div>
  );
}

export default App;
