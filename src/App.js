import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL , API_KEY} from './API';

function App() {

  const [info, setInfo] = useState([]);

  const fetchNasa = () => {
    axios.get(`${BASE_URL}/?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data)
      setInfo(res.data);
    })
    .catch(err => {
      console.log(err)
    })
  }

    useEffect(fetchNasa, [])

  return (
    <div className="App">
      <h1>NASA API!!!</h1>
      <h2>Title: {info.title}</h2>
      <p>Information: {info.explanation}</p>
      <p>Date: {info.date}</p>
      <img src ={info.url} alt ={info.title}/>
      <p>Copyright: {info.copyright}</p>
    </div>
  );
}

// function Body(props) {
//   const {info , setInfo} = props;


// return (

//   <div>{props.url}</div>

//   );
// }

export default App;
