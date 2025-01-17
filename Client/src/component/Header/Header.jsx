import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header flex justify-between items-center p-4 bg-white text-black">
      {/* Logo Section */}
      <div  className="header__logo test-2xl font-bold">
        <Link to="/" className="text-2xl font-bold">
        <img
          src="data:image/png;base64,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"
          alt="Resturant Logo"
          className="h-11"
        />
        </Link>
      </div>
      {/* Search */}
        <div className="header__search">
            <input
            type="text"
            placeholder="Search for Blog"
            className="p-2  border border-gray-300 rounded-lg"
            />
            <button className="bg-red-600 text-white p-3 w-30 rounded-lg">Search</button>
        </div>

      {/* Button Section */}
      <div className="header__button">
        <Link to="signin" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
