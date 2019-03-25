import React, { Component, Fragment } from 'react';

import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import tefPhoto from '../Images/tef.jpg';
import './Tef.css';

class Tef extends Component {
    render() {



        return (
            <Fragment>
                <div className="bgImg">
                    <Navbar />
                    <div className="tefPage">
                        <div className="tefContainer">
                            <div className="tefText">
                                <h2>grupa for tef</h2>
                                <p className="tefParagraph1">Our Mission at Grupa is to build global internet platforms & companies working with entrpreneurs, startups & businesses using dedicated engineering teams.</p>
                                <p className="tefParagraph2">Grupa is offering 250 TEF entreprenuers the opportunity to get 25 - 75% discount vouchers to work with our innovative and elite engineering teams.</p>
                                <div className="applyNow">
                                    <a href="https://goo.gl/LN1hpk" target="_blank" rel="noopener noreferrer" className="btn">apply now</a>
                                </div>
                            </div>
                            <div className="tefImage">
                                <img src={tefPhoto} alt="Tef group" />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Fragment>
        )
    }
}

export default Tef;