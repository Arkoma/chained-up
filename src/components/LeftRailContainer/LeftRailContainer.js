import React, { Component} from 'react';
import linkdInBuds from '../linkdInBuds';

class LeftRailContainer extends Component {
    state = {linkdInBuds};
    render() {
      console.log(this.state.linkdInBuds[0]);
      return (
        <div className="lrc">
          <div className="lrc__top">
            <h3 className="lrc__your-connection-number">336</h3>
            <h3 className="lrc__your-connections-text">Your connections</h3>
            <div className="lrc__see-all-btn">See all</div>
          </div>
          <div className="lrc__small-pics">
            <img className="lrc__small-pic-1"src={this.state.linkdInBuds[1].avatarUrl} />
            <img className="lrc__small-pic-2"src={this.state.linkdInBuds[3].avatarUrl} />
            <img className="lrc__small-pic-3"src={this.state.linkdInBuds[5].avatarUrl} />
            <img className="lrc__small-pic-4"src={this.state.linkdInBuds[7].avatarUrl} />
          </div>
          <h3 className="lrc__your-connections-text">You have more contacts to connect with</h3>
          <div className="lrc__continue-btn">Continue</div>
          <div className="lrc__more-options-btn">More options</div>

        </div>
      );
    }
  }
  
export default LeftRailContainer;