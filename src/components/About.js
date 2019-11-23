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
          <p className="aboutMe">I studied graphic design and I consider myself as a creative person always thinking how to do a better process in my work. I have experience creating brands and designing the frameworks to web pages, e-commerces, landing pages and movile apps to Android and iOS. Therefor, now I'm learning programming to complement those skills.
In the last 3 years I started my path to specialize me in web development on my own taking workshops, online courses and getting into Laboratoria's bootcamp as front-end develper.
I really enjoy team work because the feedback of colleagues improve my work and inspire me to keep learning.
<br/>
<span className="spanContact" >I love maintain my soul creative looking for new trends in design, art and new technologies.</span></p>
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

