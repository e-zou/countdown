import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => { // increment 
    let newCount = this.state.count + 1;
    this.setState( { // updates the state
      count: newCount
    });
  }

  decrementCount = () => { // decrement
    let newCount = this.state.count - 1;
    this.setState( { // updates the state
      count: newCount
    });
  }

  multiplyByTwoCount = () => { // multiply
    let newCount = this.state.count * 2;
    this.setState( { // updates the state
      count: newCount
    });
  }

  divideByTwoCount = () => { // multiply by 2 plus 1
    let newCount = this.state.count / 2;
    this.setState( { // updates the state
      count: newCount
    });
  }

  render() {
    axios
      .get("https://www.reddit.com/r/CollegeBasketball/.json")
      .then(response => {
        console.log(response.data);
      });
    return (
      <div className="App">
         {/* TODO: display the count and create a button that increments the count */}
         {this.state.count} <br/>
         <button onClick={() => this.incrementCount()}>Increment</button>
         <button onClick={() => this.decrementCount()}>Decrement</button>
         <button onClick={() => this.multiplyByTwoCount()}>Multiply by 2</button>
         <button onClick={() => this.divideByTwoCount()}>Divide by two</button>
      </div>
    );
  }
}

export default App;
