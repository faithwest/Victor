import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PortfolioPage from './PortfolioPage';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  );
};

export default App;
