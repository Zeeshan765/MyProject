import React from 'react'
import "./createscreen.css"

export default function CreateScreen() {
    return (
        <div className = "createScreen">
            <img
        className="createImg"
        src="https://www.cscassets.com/recipes/large_cknew/large_24099.jpg"
        alt="Picture"
      />
           <form className="createForm">
        <div className="createFormGroup">
          <input id="fileInput" type="file"  />
 
          <input
            className="createInput"
            placeholder="PLease Enter the Title of the Recipie Here"
            type="text"
            autoFocus={true}
          />
        </div>

        <div className="createFormGroup">
          <textarea
            className="createInputText"
            placeholder="Write Recipie Detail here"
            type="text"
            autoFocus={true}
          />
      
        </div>
        <button className="createSubmit" type="submit">
          Store data
        </button>
      </form>
    </div>
  );
}
        
 
