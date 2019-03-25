import React, { Component, Fragment } from 'react';

import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import './Pricing.css';

class Pricing extends Component {
    render() {

        return (
            <Fragment>
                <div className="bgImg">
                    <Navbar />
                    <div className="container">
                        <header>
                            <h1 className="topText">smart pricing</h1>
                        </header>
                        <div className="gridContainer">
                            <div className="box">
                                <h1 className="price">$5,399</h1>
                                <p className="rate">per iteration</p>
                                <p className="package">Dedicated Experience, Professional Product Engineers, Project Tracking, Agile Project Management.</p>
                                <a href="/" className="kickoff">KickOff Your Project</a>
                            </div>
                            <div className="listContainer">
                                <div className="pricing1">
                                    <p className="pricing1header">Agile Design Sprint</p>
                                    <p className="pricing1content">Teams execute design sprints on your idea to ensure that the right products are built to best address your industry</p>
                                </div>
                                <div className="pricing2">
                                    <p className="pricing2header">Risk Management & Project Tracking</p>
                                    <p className="pricing2content">40% of startups and projects fail globally due to poor management as well as execution. We are on a mission to reduce this risk with our in-platform tools</p>
                                </div>
                                <div className="pricing3">
                                    <p className="pricing3header">Quality Assurance and Control</p>
                                    <p className="pricing3content">We as well as our in-ecosystem and testing partners help ensure that quality products are chun out consistently with our incorporated rating and testing tool.</p>
                                </div>
                                <div className="pricing4">
                                    <p className="pricing4header">Speedy Development</p>
                                    <p className="pricing4content">Our framework guarantees that platforms are built iteratively using Agile-Scrum methodology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Fragment>
        )
    }
}

export default Pricing;