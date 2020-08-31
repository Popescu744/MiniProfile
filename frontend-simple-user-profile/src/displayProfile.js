import React, { Component } from 'react';
import ProfileDataService from './ProfileDataService'
import "./App.css";
import { Redirect } from 'react-router-dom';
import ProfilePic from './img/pic1.png';


const url = "localhost:8080/users"
var name;
var description;
var link;

class DisplayProfile extends Component {


  constructor(props) {
    super(props)
    this.state = {
      profiles: []

    }
    this.refreshProfiles = this.refreshProfiles.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.refreshProfiles();//call refreshCourses as soon as a component is mounted.
  }

  refreshProfiles() {
    ProfileDataService.retrieveAllUsers()
      .then(
        response => {
          console.log(response);
          this.setState({ profiles: response.data })
        }
      )
  }

  handleClick(props) {
    this.props.history.push('/editProfile');
    //return <Redirect  to=  "/editProfile/" />
  }

  render() {
    return (
      <div>
        <div className="appContainer">

          {
            this.state.profiles.map(
              profile =>
                <div className="detailsContainer">

                  <div className="avatarContainer">
                    <img src={ProfilePic} width="100" height="100"/>
                  </div>

                  <table className="detailsTable">
                    <tbody>
                      <tr>
                        <th className="rowHeader">ID</th>
                        <td>{profile.id}</td>

                      </tr>
                      <tr>
                        <th className="rowHeader">Name</th>
                        <td>{profile.name}</td>

                      </tr>

                      <tr>
                        <th className="rowHeader">Link</th>
                        <td>{profile.link}</td>

                      </tr>

                      <tr>
                        <th className="rowHeader">Description</th>
                        <td>{profile.description}</td>

                      </tr>
                    </tbody>
                  </table>


                </div>
            )
          }


          <div className="buttonContainer">
            <button className="redAndWhite" type="button" onClick={this.handleClick}> Edit Profile</button>
          </div>


        </div>

      </div>
    )
  }

}




export default DisplayProfile