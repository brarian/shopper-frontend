import React from "react";

const Wishcard = props => {
  return (
    <div>
      <h3>Username: {props.home}</h3>
      <h3>Email: {props.email}</h3>
      <h3>Salary: {props.salary}</h3>
    </div>
  );
};

export default Wishcard;
