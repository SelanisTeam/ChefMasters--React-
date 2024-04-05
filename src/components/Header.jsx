import React, { useState } from 'react';
import "./Header.scss";
import { Link, useLocation } from 'react-router-dom';
import $ from 'jquery'

function Header(props) {

    return (
        <header>
            <div className="header">
                <img src={`main-logo.svg`} />

                <div className='ulList'>
                    <ul>
                        <Link className="li" to={'./'}>Home</Link>
                        <Link className="li" to={'./about'}>About Us</Link>
                        <Link className="li" to={'./random'}>Random Meal</Link>

                    </ul>
                </div>

                <form>
                    <input type="text" name="search" placeholder="Find Recipe" id="search" />
                    <Link onClick={() => props.getSearch( $('#search').val() )} className="search-button" to={`./search`}>Search</Link>
                </form>
            </div>
        </header>
    )
}

export { Header }