import React from "react";
import "./styles.css"

export default function Navbar() {
    return (<nav className='nav'>
    <a href='/' className='site-Title'>Site Name</a>
    <ul>
      <li>  <a href='/pricing'>Price</a></li>
      <li>  <a href='/about'>About</a> </li>
      <li>  <a href='/contact'>Contact</a> </li>
    </ul>      
</nav>

);
   
}

