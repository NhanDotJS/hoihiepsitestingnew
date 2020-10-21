import React from 'react';
import {db} from './firebase';
import {useCollectionData} from 'react-firebase-hooks/firestore';


function Leaderboard(){
  const leaderboard = db.collection('TopKnight');
  const queries = leaderboard.orderBy('Score', 'desc').limit(10);
  const [names] =useCollectionData(queries, {idField:'id'});
  const topReport = db.collection('TopReport');
  const reportQueries = topReport.orderBy('Score', 'desc').limit(10);
  const [reports] =useCollectionData(reportQueries, {idField:'id'});
  if (!names){
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  else if(!reports){
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  else{
    return(
        <div className="articles-container">
            <h1 className="title">Vinh danh</h1>
            <div className="leaderboardtable">
              <h2>Top Hiệp Sĩ</h2>
              <p>Top 10 những hiệp sĩ đã quả cảm, cật lực, anh dũng tham gia nhiều case file nhất tính đến thời điểm hiện tại</p>
            <table>
                <tr>
                    <th className="leftcol">Name</th>
                    <th>Rank</th>
                    <th >Số case đã tham gia</th>
                </tr>
                {names.map((name)=>(
                    <tr>
                        <td className="leftcol">{name.Name}</td>
                <td>{name.Rank}</td>
                        <td >{name.Score}</td>
                    </tr>
                    )
                
                )}
            </table>
            <h5><a href="http://bit.ly/HHS-TopKnight" target="_blank">Truy cập danh sách đầy đủ</a></h5>
            </div>
            <div className="leaderboardtable">
              <h2>Top Hoa Tiêu</h2>
              <p>Top 10 những hoa tiêu nhanh nhạy, khéo léo, luồn lách trong lòng địch để theo dõi, báo cáo các trường hợp.</p>
            <table>
                <tr>
                    <th className="leftcol">Name</th>
                    <th >Số case đã báo cáo</th>
                </tr>
                {reports.map((report)=>(
                    <tr>
                        <td className="leftcol">{report.Name}</td>
                        <td >{report.Score}</td>
                    </tr>
                    )
                
                )}
            </table>
            <h5><a href="http://bit.ly/HHS-TopKnight" target="_blank">Truy cập danh sách đầy đủ</a></h5>
            </div>
            
        </div>
        
    );
  }
}

export default Leaderboard;

