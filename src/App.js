import React from 'react';
import logo from './assets/images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <img src={logo} className="logo" alt="Dave O'Brien, JavaScript & UI Developer" />
      <div className="content">
        <a href="/assets/daveobrien-cv-202001.pdf" download className='link'>Download my CV</a>
        <p>A small update is coming soon. Serious.</p>
        <p>That said, it is arguable whether coming back is really worth your while but if you're curious, try again next week (that's the <b>10th Feb 2020</b>). If this date is in the past then shame on me. And if you think this is JavaScript Date object then <a href="https://github.com/daveobriencouk/2020.daveobrien.co.uk/blob/master/src/App.js">shame on you</a>.</p>
        <p>OK, shame on me... the 10th is but a distant memory. It's been a wild two weeks, lets see what happens this weekend.</p>
      </div>
    </div>
  );
}

export default App;
