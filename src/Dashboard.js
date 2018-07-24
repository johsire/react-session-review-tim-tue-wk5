import React from "react";
import axios from "axios";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button>Go to Admin Page (Only Admins)</button>
        <button>Go to Student Page</button>
      </div>
    );
  }
}
