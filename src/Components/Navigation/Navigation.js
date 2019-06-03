import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Navigation.css";

const NavigationBar = props => {
  return (
    <div>
      <nav>
        <li>Logo</li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to={"/login"}>Log In</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </nav>
    </div>
  );
};

export default NavigationBar;
