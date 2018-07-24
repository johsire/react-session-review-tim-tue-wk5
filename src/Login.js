import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  constructor() {
    super();
  }

  handleLogin(role) {
    axios.post("/api/login", { role: role });
  }

  render() {
    return (
      <div>
        <div>Login</div>
        <Link to="/dashboard">
          <button onClick={() => this.handleLogin("admin")}>
            I'm an Admin
          </button>
        </Link>
        <Link to="/dashboard">
          <button onClick={() => this.handleLogin("student")}>
            I'm a Student
          </button>
        </Link>
      </div>
    );
  }
}
