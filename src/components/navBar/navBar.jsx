import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-white">
              MyLogo
            </a>
          </div>

          {/* Toggle button (for mobile) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu (desktop) */}
          <div className="hidden sm:flex space-x-4">
            <Link to="/product-list" className="hover:text-gray-200 text-white">
              Products List
            </Link>
            <Link to="/cart" className="hover:text-gray-200 text-white">
              Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Dropdown Menu (mobile) */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/product-list" className="hover:text-gray-200 block px-3 py-2 rounded-md hover:bg-blue-500 text-white">
              Products List
            </Link>
            <Link to="/cart" className="hover:text-gray-200 block px-3 py-2 rounded-md hover:bg-blue-500 text-white">
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar