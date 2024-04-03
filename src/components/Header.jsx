import React from 'react';
import "./Header.scss";

function Header() {
    return (
        <header>
            <div className="header">
                <img src="main-logo.svg" />

                <div className='ulList'>
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export { Header }