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
                    <div className="delete-button" onClick={ () => {this._deleteClickHandler(bud.id)}}>X</div>
                    <img src={bud.avatarUrl} />
                    <div className="core-rail-bud-username">{bud.username}</div>
                    <div className="core-rail-bud-job">{bud.job}</div>
                    <div className="core-rail-bud-connections">&#128279; {bud.connections}</div>
                    <div className="core-rail-bud-button" onClick={ () => {this._connectClickHandler(bud.id)}}>{bud.connectButton}</div>
                </div>
                )
            })}
        </div>
      );
    }
    _deleteClickHandler = id => {
        let temp = this.state.linkdInBuds.filter(element => {
            if (element.id !== id) return {...element}
        })
        this.setState({linkdInBuds: temp});
    }
    _connectClickHandler = id => {
        let temp = this.state.linkdInBuds.map(element => {
            if (element.id === id) return {...element, connectButton: "Connected" }
            else return {...element}
        })
        this.setState({linkdInBuds: temp});
    }
}
  
export default CoreRail;