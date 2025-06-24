import React from "react";
import { Search } from "lucide-react";
import { useState } from "react";

const Stock = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
  ];

  const filteredStocks = stocks.filter(
    (stock) =>
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-700">
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
          <tbody>
            {filteredStocks.length > 0 ? (
              filteredStocks.map((stock, index) => (
                <tr key={index} className="hover:bg-gray-900 transition">
                  <td className="px-4 py-2 border border-gray-700 ">
                    {stock.symbol}
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
    </div>
  );
};

export default Stock;
