import React, { Component } from 'react'
import axios from 'axios';
import "./App.css";


class EditProfile extends Component {


  constructor(props) {

    super(props);

    this.id = ""
    this.name = ""
    this.description = ""
    this.link = ""

    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIdChange(event) {
    this.setState({ id: event.target.value });
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }
  handleLinkChange(event) {
    this.setState({ link: event.target.value });
  }

  handleSubmit(event) {

    console.log("name inserted: " + this.state.name);
    console.log("description submitted: " + this.state.description);
    console.log("link submitted: " + this.state.link);

    console.log(this.state);
    console.log(this.state.id);
    console.log(JSON.stringify(this.state))

    axios.put("http://localhost:8080/users/" + this.state.id, this.state
    )
      .then(
        this.props.history.push('/users'),

        response => {
          console.log(response);
        })
      .catch(error => {
        console.log(error);
      });


    //POST request for inserting new users for the future
    //axios.post("http://localhost:8080/users/", this.state
    //)
    //.then(response => {
    //  console.log(response);
    // })
    //.catch(error => {
    // console.log(error);
    // });

    event.preventDefault();
  }



  render() {
    return (

      <div className="appContainer">

        <div className="editTitle">
            <p>Edit your profile</p>
        </div>
        <form >
         
           <table className="editDetailsTable">
                    <tbody>
                      <tr>
                        <th className="rowHeader">ID</th>
                        <td><input name="id" type="text" onChange={this.handleIdChange} /></td>

                      </tr>
                      <tr>
                        <th className="rowHeader">Name</th>
                        <td><input name="name" type="text" onChange={this.handleNameChange} /></td>

                      </tr>

                      <tr>
                        <th className="rowHeader">Link</th>
                        <td><input name="link" type="text" onChange={this.handleLinkChange} /></td>

                      </tr>

                      <tr>
                        <th className="rowHeader">Description</th>
                        <td><input name="description" type="text" onChange={this.handleDescriptionChange}/></td>

                      </tr>
                    </tbody>
                  </table>

          <div className="buttonContainer">
            <button className="redAndWhite"  name="submitButton" onClick={this.handleSubmit} > Save Changes </button>
          </div>
        </form>


      </div>
    );
  }
}

export default EditProfile




