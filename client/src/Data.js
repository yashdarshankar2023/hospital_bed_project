import React from "react";

import "./App.css";
import "./css/DataStyle.css"

function Data() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {

        setData(data)
      });
  }
    , []);
  return (
    <div className="App">
    
  
      
      <div className="content">
        <br /><br /><br />
        <table>
              <tr>
                <th>Hospital Name</th>
                <th>Application ID</th>
                <th>Vacancy</th>
                <th>Contact</th>
                
              </tr>
              {data.map((d, index) =>
         

              <tr>
                <td>{d.name}</td>
                <td>{d.application_id}</td>
                <td>{d.vacancy}</td>
                <td>{d.contact}</td>
              </tr>)}
        </table>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        


      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


    </div>
  );
}
export default Data;



