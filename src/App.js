import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }

componentDidMount() {
  axios.get('/api/inventory')
    .then(response => {
      this.setState({inventory: response.data})
    }).catch(error => {
      console.log(error)
    })
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
