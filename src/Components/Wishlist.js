import React, { Component } from "react";
import Wishcard from "./Wishcard";
class Wishlist extends Component {
  constructor(props){
    super(props); 
      this.state = ""; 
  }

  render(){
    return (
      <div> 
        <Wishcard />
        <Wishcard />
        <Wishcard />
        <Wishcard />
      </div>
    )
  }
}