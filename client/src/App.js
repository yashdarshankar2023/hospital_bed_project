import React from "react";
import "./App.css";
import Image1 from "./assets/background1.jpg"
function App() {
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
      <div className="mask">
        <img className="image" src={Image1} alt="Image1" />

      </div>
      <div className="content">
        <br /><br /><br />
        {!data ? <h1>Loading</h1> : data.map((d, index) =>
          <div className="box">
            
            <div className="box_items"><b>Hospital Name:- </b> {d.name}</div>
            <div className="box_items"><b>Application ID:- </b> {d.application_id}</div>
            <div className="box_items"><b>Vacancy:- </b>{d.vacancy}</div>
            <div className="box_items"><b>Contact:- </b>{d.contact}</div>

          </div>
        )}


      </div>

    </div>
  );
}
export default App;