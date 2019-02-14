import React from 'react';

import Features from './frontpage/WhitePanelFeatures';
import PricingContainer from '../../containers/PricingContainer';
import Speakers from './frontpage/DarkPanelSpeakers';
import Location from './frontpage/FullWidthMapLocation';
import About from './frontpage/DarkPanelAbout';

export default () => (
  <div id="front-page-container">
    <About />
    <Features />
    <Speakers />
    <PricingContainer />
    <Location />
  </div>
)
