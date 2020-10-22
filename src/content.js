import React, {useState, useEffect} from "react";
import {db} from './firebase';
import Loading from './loading';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function ContentPanel(quote){

  const [copyText, setCopyText] = useState(`${quote.quote.Quote}`);
  useEffect(()=>{
    setCopyText(`${quote.quote.Quote} cre: ${quote.cre}`)
  },[quote.cre]);
  
    return(
        
        <div className="content-section">
          {/* <textarea readOnly rows="auto" cols="auto">{quote.quote}</textarea> */}
          <h1>{quote.quote.Title}</h1>
          <p>{quote.quote.Des}</p>
          <h5>{quote.quote.Quote}</h5>
          <h5>cre: {quote.cre}</h5>
          <CopyToClipboard text= {copyText} >
            <button className="CopyButton">Copy to clipboard</button>
          </CopyToClipboard>

        </div>
    );
}



function ContentSection(){
  const [input, setInput] = useState("");
  const updateInput = (e) => {
        setInput(e.target.value);
  };
  const quotes = db.collection('Quotes')
  const [quote] = useCollectionData(quotes, {idField:'id'});
  // const [quote] = [];
  if (!quote){
    return(
      <div>
        <Loading/>
      </div>
    );
  }
  else{
    return(
        
        <div className="articles-container">
          {/* <p className="title">Nhập cre vào đây đi bạn ơi:</p>
          <input
          className="search-bar"
          type="text"
          value={input}
          onChange={updateInput}
          /> */}
          <div class="input-focus-effect">
            <input type="text" value={input}
          onChange={updateInput}/>
            <label>Nhập cre đúng vào đây đi bạn ơi...</label>
          </div>
          {quote.map((quote) => (
          <ContentPanel quote={quote} cre={input}/>
          ))}
        </div>
    );}
}



export default ContentSection