import React, { Component } from 'react'

class Product extends Component {
    render() {  
     const {val} = this.props
    return (
            <div>
               <img src={val.img} />
                <p >{val.product}</p>
                <p >{val.price}</p>
            </div>
        )
    }
}

export default Product
