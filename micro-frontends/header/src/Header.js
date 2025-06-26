import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>🚀 Micro Frontend Demo</h1>
                <nav className="header-nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header; 