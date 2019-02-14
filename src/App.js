import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { FrontPageNavbar, OtherPageNavbar } from './components/page/Navbar';
import { FrontPageFooter, OtherPageFooter } from './components/page/Footer';

import Header from './components/pages/frontpage/TransparentHeader';

import FrontPage from './components/pages/front-page';


import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="content-wrapper">
          <Route exact path="/" component={FrontPageNavbar} />
          <Route path="/:path" component={OtherPageNavbar} />
          <Route exact path="/" component={Header} />
          <div id="content-container">
            <Route exact path="/" component={FrontPage} />
          </div>
          <Route exact path="/" component={FrontPageFooter} />
          <Route path="/:path" component={OtherPageFooter} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  hideSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default App;
