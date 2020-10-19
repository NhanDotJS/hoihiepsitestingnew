import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarPage from './nav';
import Leaderboard from './leaderboard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======


    <NavbarPage/>
    <div className="bodycontainer">
      
      <Switch>
        <Route path= "/" exact component={ContentSection}/>
        <Route path="/vanmau" component={ContentSection}/>
        <Route path="/leaderboard" component={Leaderboard}/>
      </Switch>
      
>>>>>>> 84d21ec... leaderboard update
    </div>
    </div>
    </Router>
  );
}

export default App;
