import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes/index';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Root />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
