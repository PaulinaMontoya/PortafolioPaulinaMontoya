import React, { Component } from 'react';
import Menu from '../components/Menu'
import '../styles/about.css';
import pau from '../images/photopaulina.png';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="cointenerAbout">
        <Menu />
        <div className="cointenerTextAbout">
          <img src={pau} alt="" className="photoPau" ></img>
          <p className="titleAbout">Hello! I´m <span className="spanContact" >Paulina Montoya</span></p>
          <p className="aboutMe">I studied a Bachelor Degree in Graphic Design and have experience developing brands and designing interfaces to web sites, e-commerces, landing pages and mobile apps.
In the last 3 years I've specilized me in web design and web development attending workshops, taking online courses and currently I'm finishing Laboratoria's bootcamp as a Front-end Developer.
I enjoy teamwork but also can work independently. 
<br/>
<span className="spanContact" >I love keep my creative being in constant exploration about new trend on design, art and new technologies.</span></p>
          <div className="cointenerButtonsAbout">
            <Link to="/contact">
              <button className="buttonAboutContact"><a target="_blank">Contact me</a></button>
            </Link>
            <Link to="/works">
              <button className="buttonAboutContact"><a target="_blank">See my works</a></button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

