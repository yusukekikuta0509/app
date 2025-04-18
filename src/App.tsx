import React from 'react';
import Header from './components/Header';
import Swap from './components/Swap';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <Swap />
      </main>
    </div>
  );
}
