import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(function countries() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        const names = data.map(country => country.name)
        console.log(names)
      })
      .catch(error => console.log(error));

  }, [])





  return (
    <div className="App">
      <header className="App-header">

        <h1>Number of country : {}</h1>
        <button >Click</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
