import React, { Component, Fragment } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="foot">
                    <hr className="hr-style"></hr>
                    <footer className="footer">
                        <p className="copyright">&#169; 2018 Grupa</p>
                        <p className="contactUs"><a href="https://goo.gl/forms/uvhcdzN0dd1DBhzN2" target="_blank" rel="noopener noreferrer" >Contact us</a></p>
                    </footer>
                </div>
            </Fragment >
        )
    }
}

export default Footer;