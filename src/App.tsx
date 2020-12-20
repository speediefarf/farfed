import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/get-message?name=Michael")
    .then(res => res.text())
    .then(data => setMessage(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is no longer the default React page.
        </p>
        <a
          className="App-link"
          href="https://learn.newrelic.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn NRU
        </a>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
