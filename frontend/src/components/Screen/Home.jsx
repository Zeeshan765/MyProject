import React from 'react'
import Header from "../Header"
import Cart from "../Carts/Cart"
import "./home.css"

export default function Home() {
    return (
        <>

        <Header/>
        <div className="home">
          <Cart/>
          
        </div>
        </>
    )
}
