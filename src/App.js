import React from 'react';
import logo from './assets/images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <img src={logo} className="logo" alt="Dave O'Brien, JavaScript & UI Developer" />
      <div className="content">
        <a href="/assets/daveobrien-cv-202001.pdf" download className='link'>Download my CV</a>
        <p>A small update is coming soon. Serious. However, it is arguable whether coming back is worth your while, but if you're curious, try again next week (that's the 10th Feb 2020). It can't hurt.</p>
      </div>
    </div>
  );
}

export default App;
