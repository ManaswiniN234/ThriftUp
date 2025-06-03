import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='w-[75%] h-16 mt-[50px] rounded-[10px] bg-white shadow-lg mx-auto flex items-center justify-between px-4 relative'>
      {/* Left menu (hidden on tablet/phone) */}
      <div className='hidden md:flex gap-6 items-center'>
        <a href='#' className='text-gray-700 hover:text-blue-600'>
          Home
        </a>
        <a href='#' className='text-gray-700 hover:text-blue-600'>
          About Us
        </a>
        <a href='#' className='text-gray-700 hover:text-blue-600'>
          Contact Us
        </a>
      </div>

      {/* Hamburger menu (visible on tablet/phone) */}
      <div className='md:hidden flex items-center'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Company name always centered */}
      <div className='absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-blue-700'>
        CompanyName
      </div>

      {/* Signup button */}
      <div className='hidden sm:flex'>
        <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
          Sign Up
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md rounded-b-[10px] p-4 md:hidden'>
          <a href='#' className='block py-2 text-gray-700'>
            Home
          </a>
          <a href='#' className='block py-2 text-gray-700'>
            About Us
          </a>
          <a href='#' className='block py-2 text-gray-700'>
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
