import React, { Component } from 'react';
import '../styles/card.css';
import Img from '../images/logo.gif';

class Card extends Component {

    render() {
        return (
          <div className="cointenerAllCards">

            <div className="cointenerCard">
                <img className="imgCard" src={Img} />
                <div className="infoProyect">
                    <h3>Nombre del Proyecto</h3>
                    <p>Descripción del proyecto bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.......</p>
                    <div className="cointenerButtons">
                        <button className="buttonProyect">DEMO</button>
                        <button className="buttonProyect">GitHub</button>
                    </div>
                </div>
            </div>

            <div className="cointenerCard">
                <img className="imgCard" src={Img} />
                <div className="infoProyect">
                    <h3>Nombre del Proyecto</h3>
                    <p>Descripción del proyecto bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.......</p>
                    <div className="cointenerButtons">
                        <button className="buttonProyect">DEMO</button>
                        <button className="buttonProyect">GitHub</button>
                    </div>
                </div>
            </div>

            <div className="cointenerCard">
                <img className="imgCard" src={Img} />
                <div className="infoProyect">
                    <h3>Nombre del Proyecto</h3>
                    <p>Descripción del proyecto bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.......</p>
                    <div className="cointenerButtons">
                        <button className="buttonProyect">DEMO</button>
                        <button className="buttonProyect">GitHub</button>
                    </div>
                </div>
            </div>

            <div className="cointenerCard">
                <img className="imgCard" src={Img} />
                <div className="infoProyect">
                    <h3>Nombre del Proyecto</h3>
                    <p>Descripción del proyecto bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.......</p>
                    <div className="cointenerButtons">
                        <button className="buttonProyect">DEMO</button>
                        <button className="buttonProyect">GitHub</button>
                    </div>
                </div>
            </div>

            <div className="cointenerCard">
                <img className="imgCard" src={Img} />
                <div className="infoProyect">
                    <h3>Nombre del Proyecto</h3>
                    <p>Descripción del proyecto bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.......</p>
                    <div className="cointenerButtons">
                        <button className="buttonProyect">DEMO</button>
                        <button className="buttonProyect">GitHub</button>
                    </div>
                </div>
            </div>
            
            
          </div>  
      );
    }
}

export default Card;
