import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

 class Navbar extends Component {
     
     render(){
         const length = this.props.items.length
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/">
                        The <strong>Secret</strong> Stache</Link>
                </div>
                <div className="myBox2">
                    <ul className="floater">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons new badge">shopping_cart</i>{length} </Link></li>
                    </ul>
                </div>
            </nav>
        
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