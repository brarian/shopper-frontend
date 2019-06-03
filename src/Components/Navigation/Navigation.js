import React, { Component } from "react";
import Button from "../Button";
import "./Navigation.css";

const NavigationBar = props => {
  return (
    <div>
      <nav>
        <li>Logo</li>
        <li>
          <Button message="sign in" />
        </li>
        <li>
          <Button message="register" />
        </li>
        <li>
          <Button message="about" />
        </li>
      </nav>
    </div>
  );
};

export default NavigationBar;
