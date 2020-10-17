import React, {useState} from "react";
import firebase from "firebase/app"
import 'firebase/firestore'

import {useCollectionData} from 'react-firebase-hooks/firestore';

const firebaseconfig = {
    apiKey: "AIzaSyCgEz6oKwFGDEGAbrw3cYP6HjweHzoeE2Y",
    authDomain: "hoihiepsytesting.firebaseapp.com",
    databaseURL: "https://hoihiepsytesting.firebaseio.com",
    projectId: "hoihiepsytesting",
    storageBucket: "hoihiepsytesting.appspot.com",
    messagingSenderId: "822792038177",
    appId: "1:822792038177:web:c75a4e5d856f1493280060",
    measurementId: "G-M3BTTKKGBE"
  }
  
firebase.initializeApp(firebaseconfig)
const db = firebase.firestore();

function ContentPanel(quote){
    return(
        
        <div className="content-section">
            <p>{quote.quote}</p>
    <p>cre: {quote.cre}</p>
        </div>
    )
}

function ContentSection(){
    const [input, setInput] = useState("");

    const quotes = db.collection('Quotes')
    const updateInput = (e) => {
        setInput(e.target.value);

      };

  const [quote] =useCollectionData(quotes, {idField:'id'});
  if (!quote){
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  else{
    return(
        
        <div className="articles-container">
            <input
          className="search-bar"
          type="text"
          value={input}
          onChange={updateInput}
        />
            {quote.map((quote) => (
          <ContentPanel quote={quote.Quote} cre={input}/>
        ))}
            

          
        </div>
    )}
}



export default ContentSection