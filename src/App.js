import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import './Search.css';
import logo from './images/react.svg';
import news from './images/news.png';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <img className="appLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRknhb4tcPVzI32HzSQmteS_lVrUgXF1rGzEg&usqp=CAU" alt="React Logo" />

          <div className="title">
            <h1>Get Latest </h1>
            <h4>
              <a href="https://newsapi.org/">  New Updates 🔥{' '} </a>
            </h4>
          </div>

          <img className="scriptLogo" src={news} alt="Javascript Logo" />
        </div>
        <Search default="bbc-news" />
      </div>
    );
  }
}

export default App;
