import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import img from '../images/mustache.png'
import img2 from '../images/cup.jpg'



 class Home extends Component{

    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        const length = this.props.items.length
        console.log('length',length)
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price: ${item.price}.00</b></p>
                        </div>
                 </div>

            )
        })

        return(
           
            <div className="myBox">
                 <img className={"cup"} id="#cup" src={img2} alt={"Great Responsibility"}/>
                 <h4 className="center" style={{fontFamily:"cursive"}}>"Finding the best deals, so you don't have to!"</h4>
                 <img className={"logo"} src={img} alt={"Logo"}/>
                <h3 className="center">Top Sellers</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)