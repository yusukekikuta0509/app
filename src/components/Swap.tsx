import React, { useState } from 'react';

export default function Swap() {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Swap</h2>
      
      {/* From セクション */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">From</label>
        <div className="flex space-x-2">
          <select className="border p-2 rounded">
            <option>ETH</option>
            <option>DAI</option>
            <option>USDC</option>
          </select>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            className="flex-1 border p-2 rounded"
            placeholder="0.0"
          />
        </div>
      </div>

      {/* Swap ボタン */}
      <div className="flex justify-center mb-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded font-bold">
          Swap
        </button>
      </div>

      {/* To セクション */}
      <div>
        <label className="block text-gray-700 mb-1">To</label>
        <div className="flex space-x-2">
          <select className="border p-2 rounded">
            <option>ETH</option>
            <option>DAI</option>
            <option>USDC</option>
          </select>
          <input
            type="number"
            value={toValue}
            onChange={(e) => setToValue(e.target.value)}
            className="flex-1 border p-2 rounded"
            placeholder="0.0"
          />
        </div>
      </div>
    </div>
  );
}
