import React, { Component } from "react";
class Login extends Component {
  constructor(props){
    super(props); 
    this.state = ""; 
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {" "}
          Email:
          <input type="text" />
        </label>
        <label>
          {" "}
          Password:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
