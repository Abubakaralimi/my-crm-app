import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/SmartClientLogo.png';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img
          src="/SmartClientLogo.png"
          alt="SmartClient Logo"
        />
        <h1 className="text-xl font-bold">SmartClient CRM</h1>
      </div>
      <Link to="/clients">
        <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded text-white">
          View Clients
        </button>
      </Link>
    </header>
  );
};

export default Header;
