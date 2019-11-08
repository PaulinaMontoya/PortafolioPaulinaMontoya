import React, { Component } from 'react';
import '../styles/card.css';
import Img from '../images/logo.gif';
import Proyects from './Proyects';

class Card extends Component {

    render() {
        return (
            <div className="cointenerAllCards">
                   {Proyects.data.map((item) => 
                   <div className="cointenerCard">
                    <img className="imgCard" src={item.img} alt={item.name} />
                    <div className="infoProyect">
                        <h3 className="proyectName">{item.name}</h3>
                        <p className="descriptionProyect">{item.description}</p>
                        <div className="cointenerButtons">
                            <button className="buttonProyect"><a href={item.demo} target="_blank">DEMO</a></button>
                            <button className="buttonProyect"><a href={item.github} target="_blank">GitHub</a></button>
                        </div>
                        <div>
                         
                        </div>
                    </div>
                    </div>
                    )}
            </div>
        );
    }
}

export default Card;
