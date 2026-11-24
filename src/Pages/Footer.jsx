
import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'

const Footer = () => {
  const services = [
    { name: 'Website Design', path: '/web-designing' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'eCommerce Website Design', path: '/ecommerce-website-design' },
    { name: 'Website Maintenance', path: '/website-maintenance' },
    { name: 'Web Hosting', path: '/web-hosting' },
    { name: 'Domain Registration', path: '/domain-registration' }
  ]

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Contact', path: '/contact' }
  ]

  const policies = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Terms & Conditions', path: '/terms' }
  ]

  return (
    <footer className="bg-[#171717] text-white font-[Arial]">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Brand */}
          <div className="lg:pr-6">

            {/* Logo */}
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-white rounded-lg px-4 py-3 mb-7"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnAhO69swzXzLaS2XR1F-w_OOsm0_Up8z_EdyFxPvWA&s=10"
                alt="FMEOS PK Logo"
                className="w-auto h-10 max-w-[180px] object-contain"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-8 mb-7">
              I provide professional website design and development
              solutions to help businesses build a strong online
              presence. My focus is on modern design, functionality,
              performance and quality.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3">

              {[FaFacebookF, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    aria-label="Social media"
                    className="w-10 h-10 rounded-md border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-[#c5a477] hover:text-white hover:border-[#c5a477] transition duration-300"
                  >
                    <Icon />
                  </a>
                )
              )}

            </div>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-[2px] mb-8">
              Services
            </h3>

            <ul className="space-y-5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 text-sm hover:text-[#c5a477] transition duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-[2px] mb-8">
              Company
            </h3>

            <ul className="space-y-5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 text-sm hover:text-[#c5a477] transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-[2px] mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <a
                href="tel:+923114237376"
                className="flex items-start gap-3 group"
              >
                <FaPhoneAlt className="text-[#c5a477] mt-1 shrink-0" />

                <div>
                  <p className="text-gray-300 text-sm group-hover:text-[#c5a477] transition">
                    +92 311 4237376
                  </p>
                  <span className="text-gray-500 text-xs">
                    Pakistan
                  </span>
                </div>
              </a>

              <a
                href="mailto:alihammadzk@gmail.com"
                className="flex items-center gap-3 text-gray-300 text-sm hover:text-[#c5a477] transition"
              >
                <FaEnvelope className="text-[#c5a477] shrink-0" />
                <span className="break-all">
                  alihammadzk@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <FaClock className="text-[#c5a477]" />
                Replies within 24 hours
              </div>

            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923114237376"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-[#c5a477] text-[#171717] px-6 py-3 text-sm font-bold hover:bg-white transition duration-300"
            >
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
            </a>

          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-7 flex flex-col lg:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} FMEOS PK. All rights reserved.
            <span className="mx-2">|</span>
            <span className="text-gray-400">hammadali.codes</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">

            {policies.map((policy) => (
              <Link
                key={policy.name}
                to={policy.path}
                className="text-gray-500 text-xs hover:text-[#c5a477] transition"
              >
                {policy.name}
              </Link>
            ))}

          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer
