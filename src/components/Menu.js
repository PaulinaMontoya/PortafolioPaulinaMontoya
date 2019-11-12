import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; 
import '../styles/menu.css';


class Menu extends Component {
  render() {
    return (
      <div className="cointenerMenu">
        <Link to="/">
        <img src={logo} alt="" className="logoMenu" ></img>
        </Link>
        <div className="cointenerButtons">
          <Link to="/about">
          <p className="buttonMenu">Know me more</p>
          </Link>
          <Link to="/works">
          <p className="buttonMenu">Works</p>
          </Link>
          <Link to="/contact">
          <p className="buttonMenu">Contact me</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;

