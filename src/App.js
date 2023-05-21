import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    const apiUrl = 'https://api.quotable.io/random';

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
      });
  };

  return (
    <div className="App">
      <div className="quote">
        <h2>{quote}</h2>
        <small>-{author}-</small>
      </div>
      <br />
      <button className="btn" onClick={fetchQuote}>
        Generate New Quote
      </button>
    </div>
  );
}

export default App;