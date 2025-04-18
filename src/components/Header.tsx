import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="text-xl font-bold">cloneswap</div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Connect Wallet
      </button>
    </header>
  );
}
