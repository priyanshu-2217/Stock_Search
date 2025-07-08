import React from "react";
import { useParams } from "react-router-dom";

const dummyStocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: 186.12 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 127.32 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 114.29 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 331.77 },
  { symbol: "TSLAA", name: "Tesla Inc.", price: 224.57 },
];

const StockDetail = () => {
  const { symbol } = useParams();

  const stock = dummyStocks.find(
    (stock) => stock.symbol.toLowerCase() === symbol.toLowerCase()
  );

  if (!stock) {
    return (
      <div className="text-white text-center mt-10">
        <h1 className="text-2xl">Stock not found!</h1>
      </div>
    );
  }

  return (
    <div className="text-white text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">
        {stock.name} ({stock.symbol})
      </h1>
      <p className="text-xl">Current Price: ${stock.price}</p>
      <p className="text-gray-400 mt-2">More analysis coming soon...</p>
    </div>
  );
};

export default StockDetail;
