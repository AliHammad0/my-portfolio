
import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaLaptopCode,
  FaShoppingCart,
  FaBullhorn,
  FaTools,
  FaServer,
  FaGlobe,
  FaCheck
} from 'react-icons/fa'

const services = [
  {
    id: 1,
    icon: FaLaptopCode,
    title: 'Web Design & Development',
    description:
      'I create modern, responsive and user-friendly websites that represent your brand and help your business grow online.',
    features: ['Custom Website Design', 'Responsive Development', 'Modern User Experience']
  },
  {
    id: 2,
    icon: FaShoppingCart,
    title: 'eCommerce Website Design',
    description:
      'I build professional online stores that make it easier for your customers to explore products and shop with confidence.',
    features: ['Online Store Development', 'Product Management', 'User-Friendly Shopping']
  },
  {
    id: 3,
    icon: FaBullhorn,
    title: 'Digital Marketing',
    description:
      'I help businesses improve their online presence through practical digital marketing strategies focused on reaching the right audience.',
    features: ['Search Engine Optimization', 'Social Media Marketing', 'Online Brand Growth']
  },
  {
    id: 4,
    icon: FaTools,
    title: 'Website Maintenance',
    description:
      'I keep websites updated, secure and running smoothly with regular maintenance, improvements and technical support.',
    features: ['Website Updates', 'Bug Fixes', 'Technical Support']
  },
  {
    id: 5,
    icon: FaServer,
    title: 'Web Hosting',
    description:
      'I help you get reliable hosting solutions so your website can stay accessible, perform smoothly and grow with your business.',
    features: ['Reliable Hosting', 'Website Setup', 'Hosting Support']
  },
  {
    id: 6,
    icon: FaGlobe,
    title: 'Domain Registration',
    description:
      'I help you choose and register a suitable domain name that gives your business a professional identity online.',
    features: ['Domain Name Registration', 'Domain Setup', 'DNS Configuration']
  }
]

const Services = () => {
  return (
    <main className="bg-white text-black font-[Arial]">

      {/* Hero Section */}
      <section className="bg-[#f5f3ef] px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto text-center">

          <span className="inline-block text-xs md:text-sm tracking-[4px] uppercase text-[#927b5c] font-semibold mb-5">
            What I Offer
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Services Built Around
            <span className="block text-[#927b5c]">
              Your Business Goals
            </span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-8">
            From building your website to growing your online presence,
            I provide practical digital solutions designed to help your
            business move forward.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-9 bg-black text-white px-9 py-4 text-sm font-semibold tracking-wide hover:bg-[#927b5c] transition duration-300"
          >
            Discuss Your Project
          </Link>

        </div>
      </section>

      {/* Services Section */}
      <section className="px-5 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-[#927b5c] text-xs tracking-[4px] uppercase font-semibold">
              My Services
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mt-4">
              How I Can Help You
            </h2>

            <p className="text-gray-500 max-w-xl mx-auto mt-5 leading-7">
              Every business has different needs. I focus on providing
              the right digital solutions according to your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => {
              const Icon = service.icon

              return (
                <div
                  key={service.id}
                  className="group border border-gray-200 p-8 md:p-9 bg-white hover:bg-[#f8f6f2] hover:border-[#c9b89e] transition-all duration-300"
                >

                  <div className="w-14 h-14 bg-[#f3f0e9] flex items-center justify-center mb-7 group-hover:bg-black transition duration-300">
                    <Icon className="text-2xl text-[#927b5c] group-hover:text-white transition duration-300" />
                  </div>

                  <h3 className="text-xl font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-7 mb-7">
                    {service.description}
                  </p>

                  <div className="border-t border-gray-200 pt-6 space-y-4">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <FaCheck className="text-[#927b5c] text-xs shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>
              )
            })}

          </div>
        </div>
      </section>

      {/* Personal Approach */}
      <section className="bg-black text-white px-5 py-20 md:py-24">
        <div className="max-w-5xl mx-auto text-center">

          <span className="text-[#c5ad8c] text-xs tracking-[4px] uppercase font-semibold">
            Working With Me
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-5 mb-7 leading-tight">
            Direct Communication.
            <span className="block text-[#c5ad8c]">
              Personal Attention.
            </span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto leading-8">
            When you work with FMEOS PK, you communicate directly with me
            throughout your project. I focus on understanding your
            requirements, maintaining clear communication and delivering
            solutions that match your business goals.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-9 bg-white text-black px-9 py-4 text-sm font-semibold hover:bg-[#c5ad8c] transition duration-300"
          >
            Let's Work Together
          </Link>

        </div>
      </section>

    </main>
  )
}

export default Services
