import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftRailContainer from './components/LeftRailContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftRailContainer />
      </div>
    );
  }
}

export default App;
