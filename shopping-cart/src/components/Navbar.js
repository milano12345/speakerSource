import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

 class Navbar extends Component {
     
     render(){
         const length = this.props.items.length
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
                        <li><Link to="/cart"><i className="material-icons new badge">shopping_cart</i>{length} </Link></li>
                    </ul>
                </div>
            </nav>

   </div>
        
    )
     }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}

export default connect(mapStateToProps)(Navbar)