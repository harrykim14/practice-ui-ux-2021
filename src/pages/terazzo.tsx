import React from 'react'
import './terazzo.css';

const terazzo: React.FC = () => {
    const backgroundImagePath = "./terazzo-background.png";
    return (
        <div className="back-tile"
             style={{
                 backgroundImage:`url('${backgroundImagePath}')`
             }}
        >   
            <div className="typo-terazzo">Terrazo Design + Bubbling Example</div>
            <div className="bubble-first"></div>
            <div className="bubble-second"></div>
            <div className="bubble-third"></div>
            <div className="bubble-fourth"></div>
            <div className="bubble-fifth"></div>
            <div className="bubble-sixth"></div>
        </div>
    )
}

export default terazzo
