import React, {useState} from "react";
import {db} from './firebase';

import {useCollectionData} from 'react-firebase-hooks/firestore';

function ContentPanel(quote){
    return(
        
        <div className="content-section">
          <textarea readOnly rows="auto" cols="auto">{quote.quote}</textarea>
            {/* <p>{quote.quote}</p>
            <p>cre: {quote.cre}</p> */}
        </div>
    );
}

function ContentSection(){
  const [input, setInput] = useState("");
  const updateInput = (e) => {
        setInput(e.target.value);
  };
  const quotes = db.collection('Quotes')
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
          <p className="title">Nhập cre vào đây đi bạn ơi:</p>
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
    );}
}



export default ContentSection