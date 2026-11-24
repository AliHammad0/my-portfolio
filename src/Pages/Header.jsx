
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChevronDown
} from 'react-icons/fa'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const navigation = [
    { name: 'Projects', path: '/projects' },
    { name: 'Pricing', path: '/price' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact', path: '/contact' }
  ]

  const closeMobileMenu = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <header className="w-full bg-white font-[Arial] relative z-50">

      {/* Top Bar */}
      <div className="bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto px-5 py-3">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2">

              <span className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wide text-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c69b62]"></span>
                Free Consultation
              </span>

              <span className="hidden sm:block w-px h-4 bg-gray-600"></span>

              <span className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wide text-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c69b62]"></span>
                Fixed Quotes
              </span>

              <span className="hidden sm:block w-px h-4 bg-gray-600"></span>

              <span className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wide text-gray-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c69b62]"></span>
                No Hidden Fees
              </span>

            </div>

            {/* Contact Details */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm">

              <a
                href="tel:+923114237376"
                className="text-gray-200 hover:text-[#c69b62] transition-colors duration-300"
              >
                <span className="text-[#c69b62] font-bold mr-1">PK</span>
                +92 311 4237376
              </a>

              <span className="hidden sm:block w-px h-4 bg-gray-600"></span>

              <a
                href="mailto:alihammadzk@gmail.com"
                className="flex items-center gap-2 text-gray-200 hover:text-[#c69b62] transition-colors duration-300"
              >
                <FaEnvelope className="text-[#c69b62]" />
                alihammadzk@gmail.com
              </a>

            </div>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-5">

          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center shrink-0"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnAhO69swzXzLaS2XR1F-w_OOsm0_Up8z_EdyFxPvWA&s=10"
                alt="FMEOS PK Logo"
                className="w-auto h-11 sm:h-12 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">

              <Link
                to="/"
                className="text-sm font-semibold text-[#171717] hover:text-[#b58b54] transition-colors duration-300"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                  className="flex items-center gap-2 text-sm font-semibold text-[#171717] hover:text-[#b58b54] transition-colors duration-300"
                >
                  Services
                  <FaChevronDown
                    className={`text-[10px] transition-transform duration-300 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-4 w-56 z-50">
                    <div className="bg-white shadow-xl border border-gray-100 rounded-lg py-2 overflow-hidden">

                      <Link
                        to="/services"
                        onClick={() => setServicesOpen(false)}
                        className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-[#f8f6f2] hover:text-[#b58b54] transition-colors"
                      >
                        All Services
                      </Link>

                    </div>
                  </div>
                )}
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm font-semibold text-[#171717] hover:text-[#b58b54] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}

            </nav>

            {/* Consultation Button */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center justify-center bg-[#b58b54] text-white px-6 py-3.5 text-sm font-semibold rounded-sm hover:bg-[#171717] transition-all duration-300"
            >
              Free Consultation
            </Link>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(!menuOpen)
                setServicesOpen(false)
              }}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-xl text-[#171717] hover:text-[#b58b54] transition-colors"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="lg:hidden border-t border-gray-100 py-4 flex flex-col">

              <Link
                to="/"
                onClick={closeMobileMenu}
                className="px-4 py-3 text-sm font-semibold text-[#171717] hover:bg-[#f8f6f2] hover:text-[#b58b54] rounded-md transition-colors"
              >
                Home
              </Link>

              {/* Mobile Services */}
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="px-4 py-3 flex items-center justify-between text-sm font-semibold text-[#171717] hover:bg-[#f8f6f2] rounded-md transition-colors"
                aria-expanded={servicesOpen}
              >
                Services

                <FaChevronDown
                  className={`text-xs transition-transform duration-300 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {servicesOpen && (
                <Link
                  to="/services"
                  onClick={closeMobileMenu}
                  className="pl-8 pr-4 py-3 text-sm text-gray-600 hover:text-[#b58b54] transition-colors"
                >
                  All Services
                </Link>
              )}

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 text-sm font-semibold text-[#171717] hover:bg-[#f8f6f2] hover:text-[#b58b54] rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="mt-4 mx-4 text-center bg-[#b58b54] text-white py-3.5 text-sm font-semibold rounded-sm hover:bg-[#171717] transition-colors duration-300"
              >
                Free Consultation
              </Link>

            </nav>
          )}

        </div>
      </div>

    </header>
  )
}

export default Header
