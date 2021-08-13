import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'
class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        let details = {
            price: this.props.total,
          };
        let response = await fetch("https://senditnow.vercel.app/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
    let result = await response.json();
    alert(result.status);
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+$6.00)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: ${this.props.total}.00</b></li>
                    </div>
                    <div className="checkout">
                    <form onSubmit={this.onSubmit}>
                    <button type="submit" className="waves-effect waves-light btn">Checkout</button>
                    </form>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
