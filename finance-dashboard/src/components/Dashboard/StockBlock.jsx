import React from 'react';

const StockBlock = ({ stock }) => {
  return (
    <div className="stock-card">
      <div className="stock-info">
        <h3>{stock.name}</h3>
        <p className="weight">{stock.weight}% of portfolio</p>
      </div>
      <div className={`stock-trend ${stock.trend > 0 ? 'positive' : 'negative'}`}>
        {stock.trend}%
      </div>
    </div>
  );
};

export default StockBlock;