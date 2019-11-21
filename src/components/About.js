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
          <p className="aboutMe">Estudie diseño gráfico y tengo experiencia creando marcas y diseñando interfaces para sitios web, e-commerces, landing pages y aplicaciones móviles para Android e iOS.
  En los últimos 3 años comencé a especializarme en desarrollo web de manera autodidacta asistiendo a workshops, tomando cursos en línea y estoy por concluir el bootcamp de Laboratoria como Front-end developer.
  Soy una persona creativa que siempre busca la mejor forma de cubrir las necesidades en la experiencia de los usuarios aplicando metodologías ágiles en mi proceso de trabajo.
  Disfruto mucho trabajar en equipo ya que la retroalimentación de colegas siempre mejora mi trabajo y me inspira a seguir aprendiendo para expandir mi potencial.
Me gusta mantener mi ser creativo en constante exploración de nuevas tendencias en diseño, arte y nuevas tecnologías. </p>
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

