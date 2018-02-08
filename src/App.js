import React, { Component } from 'react';
import './css/App.css';
import LeftRailContainer from './components/LeftRailContainer/LeftRailContainer';
import AdBannerContainer from './components/AdBannerContainer/AdBannerContainer';
import NavBar from './components/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AdBannerContainer />
        <LeftRailContainer />
      </div>
    );
  }
}

export default App;
