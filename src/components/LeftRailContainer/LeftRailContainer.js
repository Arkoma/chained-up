import React, { Component} from 'react';

class LeftRailContainer extends Component {
    render() {
      return (
        <div className="left-rail-container">
          <h3 className="your-connection-number">336</h3>
          <h3 className="your-connections-text">Your connections</h3>
          <div className="see-all-btn">See all</div>
          <h3 className="your-connections-text">You have more contacts to connect with</h3>
          <div className="continue-btn"><a href="#">Continue</a></div>
          <div className="more-options-btn"><a href="#">More options</a></div>

        </div>
      );
    }
  }
  
export default LeftRailContainer;