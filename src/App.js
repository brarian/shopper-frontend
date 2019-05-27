import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home  from "./Components/Home";
import  UserProfile from "./Components/UserProfile";
function App() {
  return (
    <div className="App">
      <Home />
      <UserProfile />
    </div>
  );
}

export default App;
