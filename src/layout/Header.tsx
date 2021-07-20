import React, { useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {

    useEffect(() => {
        document.title = "7 UI/UX Designs"
    }, [])

    const moveToPage = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        let pageName = event.currentTarget.className.replace('tab ', '');
        // eslint-disable-next-line no-restricted-globals
        location.href=`${pageName}`;
    }

    return (
        <div className="Header">
                <img src="/icon.png" alt="Main Icon" className="icon" onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    location.href="/";
                }}/>
            <button className="tab abstract" onClick={moveToPage}>
                Abstract
            </button>
            <button className="tab onestroke" onClick={moveToPage}>
                One-stroke
            </button>
            <button className="tab threed" onClick={moveToPage}>
                3D
            </button>
            <button className="tab neumorphism" onClick={moveToPage}>
                Neumorphism
            </button>
            <button className="tab terazzo" onClick={moveToPage}>
                Terazzo
            </button>
            <button className="tab shadow" onClick={moveToPage}>
                Shadow
            </button>
            <button className="tab doubletone" onClick={moveToPage}>
                Double-tone
            </button>
        </div>
    )
}

export default Header
