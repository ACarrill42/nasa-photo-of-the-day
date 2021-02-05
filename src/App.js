import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL , API_KEY} from './API';
import styled from 'styled-components';

const StyledDiv = styled.div `
  color: purple;
  background: skyblue;

  h1 {
    color: red;
  }
  h2 {
    color: green;
  }

  ${props => (props.type === 'info' ? 'color: orange;' : null)}
  ${props => (props.type === 'date' ? 'color: gold;' : null)}
  ${props => (props.type === 'copyright' ? 'color: magenta;' : null)}
`;

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
    <StyledDiv className="App">
      <h1>NASA API!!!</h1>
      <h2>Title: {info.title}</h2>
      <p type='info'>Information: {info.explanation}</p>
      <p type='date'>Date: {info.date}</p>
      <img src ={info.url} alt ={info.title}/>
      <p type='copyright'>Copyright: {info.copyright}</p>
    </StyledDiv>
  );
}


export default App;
