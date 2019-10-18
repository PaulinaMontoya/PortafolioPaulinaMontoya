import React, { Component } from 'react';
import Menu from '../components/Menu'
import '../styles/about.css';

class About extends Component {
  render() {
    return (
      <div className="cointenerAbout">
        <Menu />
        <p className="titleAbout">This page is gonna talk <span className="spanContact" >About me</span> :I</p>
      </div>
    );
  }
}

export default About;

