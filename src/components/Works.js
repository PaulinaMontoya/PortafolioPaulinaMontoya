import React, { Component } from 'react';
import Menu from '../components/Menu';
import Card from '../components/Card';
import '../styles/works.css';


class Works extends Component {
  render() {
    return (
      <div className="cointenerWorks">
        <Menu />
        <div className="cointenerCardsProyects">
        <p className="titleWorks">Here I´m gonna show my <span className="spanContact">Works</span> :P</p>
        <Card />
        </div>
      </div>
    );
  }
}

export default Works;

