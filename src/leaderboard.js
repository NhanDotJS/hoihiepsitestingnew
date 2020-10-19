import React from 'react';
import {db} from './firebase';
import {useCollectionData} from 'react-firebase-hooks/firestore';


function Leaderboard(){
    const leaderboard = db.collection('Leaderboard');
    const queries = leaderboard.orderBy('Score', 'desc');
  const [names] =useCollectionData(queries, {idField:'id'});
  if (!names){
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  else{
    return(
        <div className="articles-container">
            <h1 className="title">Leaderboard</h1>
            <table>
                <tr>
                    <th className="leftcol">Name</th>
                    <th>Point</th>
                </tr>
                {names.map((name)=>(
                    <tr>
                        <td className="leftcol">{name.Name}</td>
                        <td>{name.Score}</td>
                    </tr>
                    )
                
                )}
            </table>
        </div>
        
    );
  }
}

export default Leaderboard;

