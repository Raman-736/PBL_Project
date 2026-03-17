// src/components/Dashboard/NewsCarousel.jsx
export default function NewsCarousel() {
  const news = [
    { id: 1, text: "Nippon India profit up", type: "good" },
    { id: 2, text: "Regulatory changes affecting HDFC", type: "bad" }
  ];

  return (
    <div className="news-carousel">
      {news.map(item => (
        <div key={item.id} className={`news-item ${item.type}`}>
          {item.text}
        </div>
      ))}
    </div>
  );
}

// src/components/Dashboard/PortfolioImpact.jsx
export const PortfolioImpact = ({ stockName, weight, drop }) => {
  const impact = ((drop * weight) / 100).toFixed(2);
  return (
    <div className="impact-block">
      <h3>Portfolio Impact Analysis</h3>
      <p>
        Since <strong>{stockName}</strong> is {weight}% of your portfolio and went down by {drop}%, 
        your total portfolio is affected by <strong>-{impact}%</strong>.
      </p>
    </div>
  );
};