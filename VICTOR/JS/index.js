import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './App';
import { MyContextProvider } from './MyContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
