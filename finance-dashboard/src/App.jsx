import React, { useState, useEffect } from 'react';
import './styles/Dashboard.css';

function App() {
  const [stockData, setStockData] = useState([]);
  const [news, setNews] = useState([]);
  const mySymbols = ['AAPL', 'RELIANCE.NS', 'TCS.NS']; // Symbols for yfinance

  useEffect(() => {
    // Fetch Stock Prices
    const fetchStocks = async () => {
      const results = await Promise.all(
        mySymbols.map(sym => fetch(`http://localhost:5000/api/stocks/${sym}`).then(res => res.json()))
      );
      setStockData(results);
    };

    // Fetch RSS News
    const fetchNews = async () => {
      const res = await fetch('http://localhost:5000/api/news');
      const data = await res.json();
      setNews(data);
    };

    fetchStocks();
    fetchNews();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="navbar-prof">
        <div className="logo">📊 EquityPulse</div>
        <div className="profile-icon">👤</div>
      </header>

      <h1>Live Dashboard</h1>

      {/* Real-time Stock Tags */}
      <div className="stock-tags">
        {stockData.map((s, i) => (
          <div key={i} className="stock-tag">
            {s.symbol}: ${s.price} ({s.trend}%)
          </div>
        ))}
      </div>

      {/* Real-time News Cards */}
      <div className="news-section">
        <div className="news-card-label">Live News</div>
        {news.map((item, i) => (
          <div key={i} className={`news-card ${item.sentiment === 'good' ? 'green' : 'red'}`}>
            <h3>Market Update</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* Impact Analysis Logic */}
      <div className="impact-container">
        <h2 className="impact-header">Portfolio News Impact Analysis</h2>
        <div className="impact-math">
          <p>Analyzing live sentiment from RSS feeds to predict portfolio shifts... [cite: 68, 69]</p>
        </div>
      </div>
    </div>
  );
}

export default App;