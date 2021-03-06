import React from 'react';
import './features.css';
import RelaxWrapper from 'react-rellax-wrapper';

const rocketsImages={
    'Falcon 1':'../spacex/img/falcon-1.png',
    'Falcon 9':'../spacex/img/falcon-9.png',
    'Falcon Heavy': '../spacex/img/falcon-heavy.png',
    'other': '../spacex/img/starship.png'
};

const Features = ({
                    name, 
                    height, 
                    diameter,
                    mass,
                    payload_weights : payloadWeights,
                    description }) => {
    
    return(
        <section className="features">
            <h2 className="features-title">
                {name} <br/>Overview
            </h2>
            <div className="overview">
                <table className="table">
                    <caption className="table-title">
                        Size
                    </caption>
                    <thead>
                        <tr>
                            <td className="table-column">HEIGHT</td>
                            <td className="table-column">{height.meters} m / {height.feet} ft</td>
                        </tr>
                        <tr>
                            <td className="table-column">DIAMETER</td>
                            <td className="table-column">{diameter.meters} m / {diameter.feet} ft</td>
                        </tr>
                        <tr>
                            <td className="table-column">MASS</td>
                            <td className="table-column">{mass.kg} kg / {mass.lb}  lb</td>
                        </tr>
                        {payloadWeights.map((item,index) => (
                            
                                <tr key={index}>
                                    <td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
                                    <td className="table-column">{item.kg} / {item.lb}</td>
                                </tr>
                            )                               
                        )}
                    
                    </thead>
                </table>
                <RelaxWrapper speed={14}>
                    <img
                            src={rocketsImages.hasOwnProperty(name) 
                                ? rocketsImages[name] 
                                : '../spacex/img/falcon-1.png'}
                            alt="rocket"
                            className="rocket"               
                    />
                </RelaxWrapper>
                <article>
                    <h3 className="features-subtitle">DESCRIPTION</h3>
                    <p className="features-text">
                        {description}
                    </p>
                </article>
            </div>
        </section>
    );
}
export default Features;