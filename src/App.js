import React, { Component } from 'react';
import './css/App.css';
import LeftRailContainer from './components/LeftRailContainer/LeftRailContainer';

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
