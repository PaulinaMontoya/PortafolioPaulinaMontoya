import React, { Component } from 'react';
import Menu from '../components/Menu'
import '../styles/works.css';


class Works extends Component {
  render() {
    return (
      <div className="cointenerWorks">
        <Menu />
        <p className="titleWorks">Here I´m gonna show my <span className="spanContact">Works</span> :P</p>
      </div>
    );
  }
}

export default Works;

