import React from 'react';
import ContentSection from './content';
import './App.css';
import NavbarPage from './nav';
import Leaderboard from './leaderboard';
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
      </Switch>
      

    </div>
    </div>
    </Router>
  );
}

export default App;
