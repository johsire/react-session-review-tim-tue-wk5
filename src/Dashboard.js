import React from "react";
import axios from "axios";

export default class Dashboard extends React.Component {

  handlePermissions() {
    axios.get('/api/permission').then(response => {
      if(response.data) {
        this.props.history.push("/admin");
        console.log('he is good')
      } else {
        console.log('nah');
      }
    })
  }


  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={() => this.handlePermissions()}>Go to Admin Page (Only Admins)</button>
        <button onClick={() => this.handStudentPage()}>Go to Student Page</button>
      </div>
    );
  }
}
