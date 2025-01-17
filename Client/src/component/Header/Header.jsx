import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header flex justify-between items-center p-4 bg-white text-black">
      {/* Logo Section */}
      <div  className="header__logo test-2xl font-bold">
        <Link to="/" className="text-2xl font-bold">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9ezUWS7dbd69d3k6ohWwxcUhA8iSzu-7Sg&s"
          alt="Netflix Logo"
          className="h-20"
        />
        </Link>
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
