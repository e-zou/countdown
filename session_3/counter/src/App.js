import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    /*TODO: insert functionality here*/
    let newCount = this.state.count + 1;
    this.setState( { // updates the state
      count: newCount
    });
  }

  render() {
    return (
      <div className="App">
         {/* TODO: display the count and create a button that increments the count */}
         {this.state.count} <br/>
         <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

export default App;
