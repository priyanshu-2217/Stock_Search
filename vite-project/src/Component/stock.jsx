import React from "react";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Stock = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const stocks = [
    { symbol: "AAPL", name: "Apple Inc.", price: 186.12 },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 127.32 },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 114.29 },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 331.77 },
    { symbol: "TSLA", name: "Tesla Inc.", price: 224.57 },
    { symbol: "META", name: "Meta Platforms Inc.", price: 293.11 },
    { symbol: "NVDA", name: "NVIDIA Corporation", price: 898.7 },
    { symbol: "NFLX", name: "Netflix Inc.", price: 425.16 },
    { symbol: "INTC", name: "Intel Corporation", price: 31.92 },
    { symbol: "ORCL", name: "Oracle Corporation", price: 122.15 },
    { symbol: "BABA", name: "Alibaba Group", price: 72.81 },
    { symbol: "V", name: "Visa Inc.", price: 271.94 },
    { symbol: "RELIANCE", name: "Reliance Industries", price: 2925.6 },
    { symbol: "TCS", name: "Tata Consultancy Services", price: 3798.1 },
    { symbol: "INFY", name: "Infosys Ltd.", price: 1499.0 },
    { symbol: "HDFCBANK", name: "HDFC Bank", price: 1650.75 },
    { symbol: "ICICIBANK", name: "ICICI Bank", price: 1130.45 },
    { symbol: "SBIN", name: "State Bank of India", price: 830.2 },
    { symbol: "ITC", name: "ITC Ltd.", price: 456.3 },
    { symbol: "LT", name: "Larsen & Toubro", price: 3456.8 },
    { symbol: "HINDUNILVR", name: "Hindustan Unilever", price: 2450.5 },
    { symbol: "ASIANPAINT", name: "Asian Paints", price: 3010.9 },
    { symbol: "MARUTI", name: "Maruti Suzuki", price: 12475.0 },
    { symbol: "AXISBANK", name: "Axis Bank", price: 1052.65 },
  ];

  const filteredStocks = stocks.filter(
    (stock) =>
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = filteredStocks.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredStocks.length / itemsPerPage);

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="  flex justify-center items-center mt-10">
        <div className=" flex items-center gap-2  py-2 border border-white rounded-lg max-x-3xl ">
          <Search className="text-white w-8 h-5 " />
          <input
            type="text"
            placeholder="Search Stocks"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" bg-gray-900 text-white outline-none ml-3  "
          />
        </div>
      </div>
      <div className="w-full   mt-8 text-white flex justify-center">
        <table className="table-fixed  border border-gray-700 w-1/2">
          <thead className="bg-gray-800 text-orange-400">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-700 ">
                Symbol
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-700">
                Price ($)
              </th>
            </tr>
          </thead>
          <tbody className="cursor-pointer">
            {currentItems.length > 0 ? (
              currentItems.map((stock, index) => (
                <tr key={index} className="hover:bg-gray-900 transition">
                  <td className="px-4 py-2 border border-gray-700  ">
                    <Link
                      to={`/stock/${stock.symbol}`}
                      className="text-blue-400 hover:text-white transition duration-300 ease-in-out 
                      transform hover:scale-105 underline-offset-2 hover:underline"
                    >
                      {stock.symbol}
                    </Link>
                  </td>
                  <td className="px-4 py-2 border border-gray-700 ">
                    {stock.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-700 ">
                    {stock.price}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-400">
                  No stocks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === number + 1
                ? "bg-white text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Stock;
