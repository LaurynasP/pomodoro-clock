import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    
  }
  render() {
    return (
      <div className="App">
        <div id="break-container">
          <p id="break-label"></p>
          <button id="break-increment"></button>
          <p id="break-length"></p>
          <button id="break-decrement"></button>
        </div>
        <div id="session-container">
          <p id="session-label"></p>
          <button id="session-increment"></button>
          <p id="session-length"></p>
          <button id="session-decrement"></button>
        </div>
        <div id="timer-container">
          <p id="timer-label"></p>
          <p id="time-left"></p>
        </div>
        <div id="controls-container">
          <button id="start_stop"></button>
          <button id="reset"></button>
        </div>
      </div>
    );
  }
}

export default App;
