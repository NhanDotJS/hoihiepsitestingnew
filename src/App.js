import React from 'react';
import ContentSection from './content';
import './App.css';
import NavbarPage from './nav';
import Leaderboard from './leaderboard';
import About from './about';
import AnhMau from './anhmau';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <NavbarPage/>
    <div className="bodycontainer">
      
      <Switch>
        <Route path= "/" exact component={ContentSection}/>
        <Route path="/vanmau" component={ContentSection}/>
        <Route path="/leaderboard" component={Leaderboard}/>
        <Route path="/about" component={About}/>
        {/* <Route path="/anhmau" component={AnhMau}/> */}
      </Switch>
      

    </div>
    </div>
    </Router>
  );
}

export default App;
