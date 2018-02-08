import React, { Component} from 'react';
import linkdInBuds from '../linkdInBuds';



class CoreRail extends Component {
    state = {linkdInBuds}
    render() {
      return (
        <div className="core-rail-container">
            <div className="core-rail-header">People you may know</div>
            {this.state.linkdInBuds.map(bud => {
                return (
                <div key={bud.id} className="core-rail-bud">
                    <img src={bud.avatarUrl} />
                    <div className="core-rail-bud-username">{bud.username}</div>
                    <div className="core-rail-bud-job">{bud.job}</div>
                    <div className="core-rail-bud-connections">{bud.connections}</div>
                    <div className="core-rail-bud-button">{bud.connectButton}</div>
                </div>
                )
            })}
        </div>
      );
  }
}
  
export default CoreRail;