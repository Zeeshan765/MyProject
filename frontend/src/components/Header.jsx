import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className ="header">
             <div className="headertitle">
                 <span className="headeritem">Recipe App</span>
             </div>
             <img className = "header_pic" 
             src = "https://st3.depositphotos.com/13324256/17303/i/1600/depositphotos_173034766-stock-photo-woman-writing-down-recipe.jpg"
             alt ="Recipe PIC"
             />
            
        </div>
    )
}
