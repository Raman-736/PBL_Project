from flask import Flask, jsonify
from flask_cors import CORS
import yfinance as yf
import feedparser

app = Flask(__name__)
CORS(app) # Allows your React app to talk to this Python server

# 1. Route to get Stock Prices (yfinance)
@app.route('/api/stocks/<symbol>')
def get_stock_data(symbol):
    try:
        stock = yf.Ticker(symbol)
        data = stock.history(period="1d")
        latest_price = data['Close'].iloc[-1]
        # Calculate a mock trend for the dashboard
        prev_price = data['Open'].iloc[-1]
        trend = ((latest_price - prev_price) / prev_price) * 100
        
        return jsonify({
            "symbol": symbol,
            "price": round(latest_price, 2),
            "trend": round(trend, 2)
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 400

# 2. Route to get News (RSS Feeds from CNBC)
@app.route('/api/news')
def get_finance_news():
    # Using CNBC's public RSS feed as requested
    RSS_URL = "https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=10000664"
    feed = feedparser.parse(RSS_URL)
    
    news_items = []
    for entry in feed.entries[:5]: # Get top 5 news
        news_items.append({
            "title": entry.title,
            "link": entry.link,
            "summary": entry.summary[:100] + "...",
            "sentiment": "good" if "up" in entry.title.lower() or "gain" in entry.title.lower() else "bad"
        })
    return jsonify(news_items)

if __name__ == '__main__':
    app.run(debug=True, port=5000)