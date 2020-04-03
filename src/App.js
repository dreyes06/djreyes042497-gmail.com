import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
        {
          product: 'Cargo Pant',
          price: '$280',
          img: 'https://cdn.webshopapp.com/shops/279216/files/313930440/2048x5120x3/engineered-garments-fa-pant-olive-cotton-ripstop.jpg'
        },
        {
          product: 'Dr. Martens',
          price: '$120',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiwywgUO91WBrEf7oMPcZAe5fdKr_P0tk5Y7CHeGabXW8Sao89&usqp=CAU'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
