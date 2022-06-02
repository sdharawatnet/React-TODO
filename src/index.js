import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> ---> Strict mode was the reason the useeffect was called multiple times.
  <App />
  // </React.StrictMode> 
);
