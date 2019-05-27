import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home  from "./Components/Home";
import  UserProfile from "./Components/UserProfile";
import Login from "./Components/Login";
import Signin from "./Components/Signin";
import Wishlist from "./Components/Wishlist";
function App() {
  return (
    <div className="App">
      <Home />
      <Login />
      <Signin />
      <UserProfile />
      <Wishlist />
    </div>
  );
}

export default App;
