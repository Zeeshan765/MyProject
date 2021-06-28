import React from 'react'
import { Link } from "react-router-dom";
import "./topmenu.css"


export default function TopMenu() {

    const user = false;
    return (
        <div className = "top">
            <ul className = "toplist">
                <li className = "toplistitems"> <Link className="link" to = "/">Home</Link>
                </li>
                <li className = "toplistitems"><Link className="link" to = "/contactus">ContactUs</Link></li>
                <li className = "toplistitems"><Link className="link" to = "/createscreen">Create</Link></li>
                <li className = "toplistitems"><Link className="link" to = "/login">Login</Link></li>
                <li className = "toplistitems"><Link className="link" to = "/register">Register</Link></li>
                <li className = "toplistitems">
                    {user && "LogOut"}
                </li>
            </ul>
             
        </div>
    )
}
