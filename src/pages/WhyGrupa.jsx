import React, { Component, Fragment } from 'react';

import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import whyImg from '../Images/cloud.svg';
import './WhyGrupa.css';



class WhyGrupa extends Component {
    render() {
        return (
            <Fragment>
                <div className="bgImg">
                    <Navbar />
                    <div className="whyMainContent">
                        <div className="whyText">
                            <h1 className="whyHeader">why we exist</h1>
                            <p className="whyParagraph">Grupa is an Ecosystem where Internet Companies are built. It's where collaborative execution of your ideas is carried out with our Dedicated Product Engineering Teams. Our platform governs the execution of your projects, manages deliverables, escrow payments and tracking progress to guarantee timely delivery.</p>
                            <div className="whySubContent">
                                <div className="whySubContent1">
                                    <h3 className="whatsMore">what's more?</h3>
                                    <ul className="whatsMoreList">
                                        <li>An ecosystem for innovators</li>
                                        <li>Automation: 100+ purpose-built block</li>
                                    </ul>
                                </div>
                                <div className="whySubContent2">
                                    <h3 className="youAlsoGet">you also get</h3>
                                    <ul className="youAlsoGetList">
                                        <li>1 month premuim support</li>
                                        <li>Detailed documentation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="whyImage">
                            <img src={whyImg} alt="WhyGrupaImage" />
                        </div>
                    </div>
                    <Footer />
                </div>
            </Fragment>
        )
    }
}

export default WhyGrupa;