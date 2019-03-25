import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import WhyGrupa from './pages/WhyGrupa.jsx';
import Features from './pages/Features.jsx';
import Pricing from './pages/Pricing';
import Tef from './pages/Tef';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/why" component={WhyGrupa} />
          <Route exact path="/about-us" component={Features} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/tef" component={Tef} />
        </div>
      </Router>
    );
  }
}

export default App;
