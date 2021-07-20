import React from 'react';
import './threed.css';

const threed: React.FC = () => {
    return (
        <div>
            <div className="typo-td">3D Cube Example</div>
            <div className="cube">
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face left"></div>
                <div className="face right"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
            </div>
        </div>
    )
}

export default threed
