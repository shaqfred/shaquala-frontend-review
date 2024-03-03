import React from 'react';
import {Link} from "react-router-dom"
import './NavBar.css';
import  candyImg from "../../assets/candyImg.jpeg"

function NavBar() {
    return (
        
           <nav className='navBar'>
            <div>
            <Link className='nav-links'to = "/">Home</Link>
            <Link  className='nav-links' to = "/candy">All Candy</Link>
            <Link className='nav-links' to = "/candy/new">Add A Candy
</Link> 
            </div>
            
        
         <img src={candyImg} className='candyImg' alt="candyBox"/> </nav> 
        
    );
}

export default NavBar;