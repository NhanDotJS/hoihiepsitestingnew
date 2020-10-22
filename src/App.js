import React from 'react';
import ContentSection from './content';
import './App.css';
import NavbarPage from './nav';
import Leaderboard from './leaderboard';
import About from './about';
import Footer from './footer'

// import AnhMau from './anhmau';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// 
function App() {
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
  }

  return (
    <Router>
    <div className="App">
    <NavbarPage id="top" />
    <div className="bodycontainer">
      
      <Switch>
        <Route path= "/" exact component={ContentSection}/>
        <Route path="/vanmau" component={ContentSection}/>
        <Route path="/leaderboard" component={Leaderboard}/>
        <Route path="/about" component={About}/>
        {/* <Route path="/anhmau" component={AnhMau}/> */}
      </Switch>
      
      
    </div>
    <Footer/>
    <a href="#top" id="myBtn" title="Go to top" ><i class="fas fa-arrow-up"></i></a>
    </div>
    </Router>
  );
}

export default App;
