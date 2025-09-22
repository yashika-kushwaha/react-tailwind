import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX, HiShoppingCart } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 border-b-2 border-yellow-300 px-3 py-2 font-semibold"
      : "text-white hover:text-yellow-300 px-3 py-2 font-medium";

  return (
    <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Clean Text Logo */}
          <NavLink to="/" className="text-3xl font-extrabold text-white tracking-wide">
            ShirtShop
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/products" className={navLinkClass}>Products</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink to="/cart" className="text-white hover:text-yellow-300 px-3 py-2">
              <HiShoppingCart size={24} />
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <NavLink to="/cart" className="text-white mr-4">
              <HiShoppingCart size={24} />
            </NavLink>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              className="text-white focus:outline-none"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-max-height duration-500 ${isOpen ? "max-h-60" : "max-h-0"
          } bg-indigo-700`}
      >
        <nav className="flex flex-col space-y-1 px-6 py-4">
          <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/products" className={navLinkClass} onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink to="/cart" className={navLinkClass} onClick={() => setIsOpen(false)}>Cart</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
