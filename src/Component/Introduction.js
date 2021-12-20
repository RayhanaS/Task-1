import React from 'react'
import "./Introduction.css";
import taswira from "./IMG_4294.jpg";


function Introduction(props) {
    
    const {name,Lastname} = props;
    return (
        <div>
<div className="left">
            <h5  >HELLO , OUR NAMES ARE <span className="samer" > {name} {Lastname} </span>, <br/> AND WE MAKE STUPID WEBSITES , BYE </h5> 
                <img className="lili" src={taswira} /> 
                </div>
        </div>
        
    )
}

export default Introduction
