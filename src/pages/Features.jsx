import React, { Component, Fragment } from 'react';

import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import './Features.css';


class Features extends Component {
    render() {
        return (
            <Fragment>
                <div className="bgImg">
                    <Navbar />
                    <div className="features">
                        <header>
                            <h1 className="HeaderText">We've got you covered</h1>
                        </header>
                        <div className="mainContent">
                            <div className="content1">
                                <p className="content1Paragraph1"><i class="fas fa-chart-line"><span id="text1">Realtime tracking</span></i></p>
                                <p className="content1Paragraph2">Your dashboard is fully equipped with state of the art tools and frameworks to effectively track your teams productivity giving you realtime progress reports.</p>
                            </div>
                            <div className="content2">
                                <p className="content2Paragraph1"><i class="fas fa-medkit"><span id="text2">Dedicated support</span></i></p>
                                <p className="content2Paragraph2">We guarantee dedicated experience thereby reaffirming our commitment to driving collaboration by facilitating interraction both Physically and Virtually as well as holding engineering teams to high standards on commitment level using our frameworks and tools.</p>
                            </div>
                            <div className="content3">
                                <p className="content3Paragraph1"><i class="fas fa-eye-slash"><span id="text3">Your ip protected with ndas</span></i></p>
                                <p className="content3Paragraph2">The Grupa Non-Disclosure Agreement Policy is our commitment to ensuring that your Intellectual property and ideas are protected.</p>
                            </div>
                            <div className="content4">
                                <p className="content4Paragraph1"><i class="fab fa-free-code-camp"><span id="text4">Code management with source code repository</span></i></p>
                                <p className="content4Paragraph2">To inspire confidence in our processes as well as guarantee ownership of product and intellectual Property, the source codes are pushed daily and stored in your private repository only accessible in your dashboard.</p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Fragment>
        )
    }
}

export default Features;