import React, { Component } from 'react';
import Adventure from "../Adventure";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Adventure
          dimension="C-137"
        />
      </div>
    );
  }
}

export default App;
