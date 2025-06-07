import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Clients from './pages/Clients';

function App() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<h2 className="text-2xl font-bold">Welcome to SmartClient Dashboard</h2>} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
