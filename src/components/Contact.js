import React, { Component } from 'react';
import Menu from '../components/Menu'
import '../styles/contact.css';


class Contact extends Component {
  render() {
    return (
      <div className="cointenerContact">
        <Menu />
        <p className="titleContact">And here everybody can <span className="spanContact">Contact me</span> :D</p>
      </div>
    );
  }
}

export default Contact;

