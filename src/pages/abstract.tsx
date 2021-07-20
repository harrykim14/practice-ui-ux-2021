import React from 'react';
import './abstract.css';

const abstract: React.FC = () => {

    const bgImagePath = './abstract-background.png';
    return (
        <div className="container" 
             style={{ 
                 backgroundImage:`url('${bgImagePath}')`
                }}
        >
            <div className="subContainer">
                <div className="object ab-first">purple</div>
                <div className="object ab-second">blueviolet</div>
                <div className="object ab-third">darkorchid</div>
            </div>
            <div className="subContainer">
                <div className="object ab-fourth">darkmagenta</div>
                <div className="object ab-fifth">fuchsia</div>
                <div className="object ab-sixth">indigo</div>
            </div>
        </div>
    )
}

export default abstract
