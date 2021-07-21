import React from 'react'
import './doubletone.css';

const doubletone: React.FC = () => {

    setTimeout(() => {
        const pharagraph = document.getElementsByClassName('dt-pharagraph');
        pharagraph[0].classList.add('fix-position');
        
    }, 2000)

    return (
        <div className="dt-container">
            <div className="first-tone">
                <p className="dt-pharagraph">
                    How CSS makes wave with clip-path example, Here one of the answer.
                </p>
            </div>
            <div className="second-tone">
            
            </div>
        </div>
    )
}

export default doubletone
