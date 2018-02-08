import React, { Component } from 'react';
import './css/App.css';
import LeftRailContainer from './components/LeftRailContainer/LeftRailContainer';
import AdBannerContainer from './components/AdBannerContainer/AdBannerContainer';
import NavBar from './components/NavBar/NavBar'
import CoreRail from './components/CoreRail/CoreRail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AdBannerContainer />
        <LeftRailContainer />
        <CoreRail />
      </div>
    );
  }
}

export default App;
