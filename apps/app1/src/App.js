import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>App 1!</h2>
          <p>It's great!</p>
        </div>
      </div>
    );
  }
}

export default App;
