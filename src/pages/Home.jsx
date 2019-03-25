import React, { Component, Fragment } from 'react';

import Footer from '../components/Footer.jsx';
import bg2 from '../Images/background.svg';
import HomeText from '../components/HomeText.jsx';
import Navbar from '../components/Navbar.jsx';
import './Home.css';



class Home extends Component {
    render() {


        return (
            < Fragment>
                <div className="bgImg">
                    <Navbar />
                    <div className="homeContent">
                        <div className="homeTextBtn">
                            <HomeText
                                text="Best way to Build a World Class Product"
                                buttonText1="Hire a world class team"
                                buttonText2="Register your dev shop"
                            />
                        </div>
                        <div className="homeImg">
                            <img src={bg2} alt="work" className="ppImg" />
                        </div>
                    </div>
                    <Footer />
                </div>
            </Fragment>
        )
    }
}

export default Home;