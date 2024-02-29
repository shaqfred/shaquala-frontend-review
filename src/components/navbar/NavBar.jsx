import React from 'react';
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <div>
           <nav className='navBar'>
            <Link to = "/">Home</Link>
            <Link to = "/candy">All Candy</Link>
            <Link to = "/candy/new">Add A Candy
</Link>            </nav> 
        </div>
    );
}

export default NavBar;