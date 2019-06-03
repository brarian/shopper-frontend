import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import NavigationBar from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Signin from "./Components/Signin";
import Login from "./Components/Login";
// import Home from "./Components/Home";
// import UserProfile from "./Components/UserProfile";
// import Login from "./Components/Login";
// import Signin from "./Components/Signin";
// import Wishlist from "./Components/Wishlist";
function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/signin" component={Signin} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
