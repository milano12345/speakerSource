import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
        <div className="navigation">
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                </div>
                <div className="myBox2">
                    <ul className="floater">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>

   </div>
        
    )
}

export default Navbar;