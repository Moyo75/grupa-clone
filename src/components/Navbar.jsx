import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import logo from '../Images/logo.png';

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar">
                    <div id="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="nav-items">
                        <Link to="/why">Why Grupa?</Link>
                        <Link to="/about-us">Features</Link>
                        <Link to="/pricing">Pricing</Link>
                        <Link to="/tef">TEF</Link>
                        <a href="https://goo.gl/forms/uvhcdzN0dd1DBhzN2" target="_blank" rel="noopener noreferrer" id="button">Start a Project</a>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default Navbar;