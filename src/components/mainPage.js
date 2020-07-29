import React from 'react'
import Page1 from "./Page1";
import Page2 from "./Page2";

function mainPage() {
    return (
        <div style={{marginTop:'200px',
            display:" flex",   
            flexWrap:" wrap",
           marginLeft:'45px',
          
        }} >
         <div style={{display: "inline-block", width: "50%"}}>
            <Page1></Page1>
         </div>
         <div style={{display: "inline-block", width: "50%"}}>
          <Page2></Page2>
         </div>
        </div>
    )
}

export default mainPage
