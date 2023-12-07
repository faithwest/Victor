// App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PortfolioPage from './PortfolioPage'; // Create this component

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/portfolio" component={PortfolioPage} />
      </Switch>
    </div>
  );
};

export default App;
