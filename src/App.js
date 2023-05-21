import './App.css';
import { useEffect, useState } from 'react'


function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuote = async () => {
    const res = await fetch(`https://type.fit/api/quotes`);
    const data = await res.json();
    const randomNumber = Math.floor(Math.random() * data.length);
    setQuote(data[randomNumber].text)
    setIsLoading(false);
  }

  useEffect(() => {
    fetchQuote();
  }, [])


  return (
    <div className="app">
      <div className="quote-container">
        {isLoading && <p>Loading ...</p>}
        <p>{quote}</p>
        <button onClick={fetchQuote}>Random Quote</button>
      </div>
    </div>
  );
}

export default App;