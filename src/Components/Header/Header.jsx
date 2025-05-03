import React from "react";
import "./Header.css"
import logo from "../../images/logo.png";



function Header() {
    return ( <>
    <header>



    <div className="logo-container">
        <img id="logo-png" src={logo} alt="logo"></img>  <h2 id="logo-text">BOOKNEST</h2>
    </div>

    <nav className="nav-bar">
        <a href="/">Home</a>
         <a href="about">About</a>
    </nav>


   </header>

    </> );
}

export default Header;