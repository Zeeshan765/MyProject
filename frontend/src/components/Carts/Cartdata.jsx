import React from 'react'
import { Link } from "react-router-dom";
import "./cartdata.css"

export default function Cartdata() {
    return (
        <div className = "cartinfo">
            <img className ="cartdata_img"
            src ="https://www.ndtv.com/cooks/images/Mutton.Kadai-620.jpg"
            alt = "CartImage"
            />

            <div className = "cartdatainfo">
              
              <span className = "carttitle">
              <Link to="/cartdata/:cartdataId" className="link">
                 Mutton Karahi
                 </Link></span>
              
            <p className = "cartdescription">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Iure delectus ex nesciunt. Excepturi laboriosam vitae blanditiis,
                 saepe eum nobis autem nihil consequatur quia, nemo iste dicta repellendus modi, 
                 consequuntur itaque!.
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Iure delectus ex nesciunt. Excepturi laboriosam vitae blanditiis,
                 saepe eum nobis autem nihil consequatur quia, nemo iste dicta repellendus modi, 
                 consequuntur itaque!.
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Iure delectus ex nesciunt. Excepturi laboriosam vitae blanditiis,
                 saepe eum nobis autem nihil consequatur quia, nemo iste dicta repellendus modi, 
                 consequuntur itaque!.
            </p>
              
              <hr />
              </div>
            
        </div>
    )
}
