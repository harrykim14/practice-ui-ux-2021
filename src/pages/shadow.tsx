import React from 'react';
import './shadow.css';

const shadow: React.FC = () => {
    return (
        <div className="bg-shadow">
            <div className="pannel-first">
                <div className="pannel-title">Title Sample</div>
                <div className="pannel-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
            <div className="pannel-second">
                Sample Image
            </div>
        </div>
    )
}

export default shadow
