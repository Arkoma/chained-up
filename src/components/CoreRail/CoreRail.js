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
                    <div>{bud.avatarUrl}</div>
                    <div>{bud.username}</div>
                    <div>{bud.job}</div>
                    <div>{bud.connections}</div>
                    <div>{bud.connectButton}</div>
                </div>
                )
            })}
        </div>
      );
  }
}
  
export default CoreRail;