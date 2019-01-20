import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTopRoute from './ScrollToTopRoute';

import Home from './components/Home';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import NewPatients from './components/NewPatients';
import RegisterNow from './components/RegisterNow';
import Treatments from './components/Treatments';
import CosmeticDentistry from './components/CosmeticDentistry';
import Dentures from './components/Dentures';
import Implants from './components/Implants';
import EmergencyDentist from './components/EmergencyDentist';

import Footer from './components/Footer';

// const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <div>
      <div class="navbar-band"></div>
      <Switch>
        <ScrollToTopRoute path="/new-patients" component={NewPatients} />
        <ScrollToTopRoute path="/register-now" component={RegisterNow} />
        <ScrollToTopRoute path="/why-choose-us" component={WhyChooseUs} />
        <ScrollToTopRoute path="/treatments" component={Treatments} />
        <ScrollToTopRoute path="/cosmetic-dentistry" component={CosmeticDentistry} />
        <ScrollToTopRoute path="/dentures" component={Dentures} />
        <ScrollToTopRoute path="/implants" component={Implants} />
        <ScrollToTopRoute path="/emergency-dentist" component={EmergencyDentist} />
        <ScrollToTopRoute path="/contact" component={Contact} />
        <ScrollToTopRoute path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  </Router>,
  document.getElementById('app')
);