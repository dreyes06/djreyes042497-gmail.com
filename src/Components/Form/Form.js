import React, { Component } from 'react'
import axios from 'axios'


class Form extends Component {
    constructor(){
        super()
        this.state = {
            img: '',
            product: '',
            price: ''
        }
        this.baseSate = this.state
    }
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleClick = () => {
        const {img, product, price} = this.state
        axios.post('', {
            img,
            product,
            price
        }).then(response => {
            this.setState({
                img: '',
                product: '',
                price: ''
            })
        }).catch(error => {
            console.log(error)
        })
     }

    cancelClick = () => {
       this.setState(this.baseSate)
    }


    
    render() {
        const {img, product, price} = this.state
        return (
            <div>
                Form
                <input placeholder='Image' type='text' onChange={this.handleChange} name='img' value={img} />
                <input placeholder='Product' type='text' onChange={this.handleChange} name='product' value={product} />
                <input placeholder='price' type='text' onChange={this.handleChange} name='price' value={price} />
                <button onClick={this.cancelClick} >Cancel</button>
                <button onClick={this.handleClick}>Add to Ineventory</button>
            </div>
        )
    }
}

export default Form