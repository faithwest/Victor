import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PortfolioPage from './PortfolioPage';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import About from './components/About';
import ServicesPage from './components/ServicesPage';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/about" component={About} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/contact"  component={contact} />
      </Switch>
    </Router>
  );
};

export default App;
