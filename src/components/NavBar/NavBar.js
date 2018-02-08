import React, { Component} from 'react';
import inButton from '../in-square-btn.png';
import homeIcon from '../home-icon.png';
import myNetworkIcon from '../my-network-icon.png';
import jobsIcon from '../jobs-icon.png';
import messagingIcon from '../messaging-icon.png';
import notificationsIcon from '../notification-icons.png';
import meIcon from '../me-icon.png';
import workIcon from '../work-icon.png';
import postAJobIcon from '../post-a-job-icon.png';

const workIconStyle = {
    borderLeft: '1px solid #5c6f7c',
    marginTop: '0px',
}

const navIconStyle = {
    marginTop: '0px',
}

class NavBar extends Component {
    render() {
      return (
        <div className="nav-bar">
          <img src={inButton} />
          <form><input type="text" placeholder="Search" /></form>
          <img src={homeIcon} style={navIconStyle} />
          <img src={myNetworkIcon} style={navIconStyle} />
          <img src={jobsIcon} style={navIconStyle} />
          <img src={messagingIcon} style={navIconStyle} />
          <img src={notificationsIcon} style={navIconStyle} />
          <img src={meIcon} style={navIconStyle} />
          <img src={workIcon} style={workIconStyle} />
          <img src={postAJobIcon} style={navIconStyle} />

        </div>
      );
    }
  }
  
export default NavBar;