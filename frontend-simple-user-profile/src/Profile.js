import React, {Component} from 'react';
import DisplayProfile from "./displayProfile"
import EditProfile from "./editProfile"
import './App.css';

class Profile extends Component{

  render(){
    return (
        <div className="profile">
          <DisplayProfile/>
          <EditProfile/>
        </div>
    )
  }
}
export default Profile