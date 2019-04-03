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
  }

  render() {
    return (
      <div className="App">
         {/* TODO: display the count and create a button that increments the count */}
      </div>
    );
  }
}

export default App;
