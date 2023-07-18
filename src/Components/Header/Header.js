import React from 'react';
import './Header.css';
import logo from './logo.jpg'; 

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="title">Welcome to the World of Beasts</h1>
    </div>
  );
}

export default Header;
