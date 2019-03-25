import React, { Component, Fragment } from 'react';

import './HomeText.css';

class HomeText extends Component {
    render() {


        return (
            <Fragment>
                <div className="content">
                    <h1 className="mainText">{this.props.text}</h1>
                    <div className="btnContainer">
                        <a href="https://goo.gl/forms/uvhcdzN0dd1DBhzN2" target="_blank" rel="noopener noreferrer">
                            <button className="buttonOne">{this.props.buttonText1}</button>
                        </a>
                        <p className="textBetween">OR</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSddWCp5fv_lNsUMcRnLRzRVAa2sXxmbxyMZyPIgjnuPu0tnow/viewform?usp=send_form" target="_blank" rel="noopener noreferrer">
                            <button className="buttonTwo">{this.props.buttonText2}</button>
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default HomeText;