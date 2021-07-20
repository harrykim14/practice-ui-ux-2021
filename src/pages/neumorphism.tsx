import React from 'react';
import './neumorphism.css';

const neumorphism: React.FC = () => {
    return (
        <div className="board">
            <div className="np-first">Flat</div>
            <div className="np-second">Concave</div>
            <div className="np-third">Convex</div>
            <div className="np-fourth">Pressed</div>
        </div>
    )
}

export default neumorphism
