
import React from 'react'
import {
  FaLaptopCode,
  FaShoppingCart,
  FaBullhorn,
  FaTools,
  FaServer,
  FaGlobe,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaCode,
  FaLightbulb,
  FaHandshake
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Web Design',
      description:
        'Modern, responsive websites designed around your brand, audience and business goals.'
    },
    {
      icon: <FaShoppingCart />,
      title: 'eCommerce',
      description:
        'Conversion-focused online stores built to help you sell products and services online.'
    },
    {
      icon: <FaBullhorn />,
      title: 'Digital Marketing',
      description:
        'SEO, PPC and social media strategies designed to increase visibility and attract customers.'
    },
    {
      icon: <FaTools />,
      title: 'Website Maintenance',
      description:
        'Ongoing updates, technical support and improvements to keep your website running smoothly.'
    },
    {
      icon: <FaServer />,
      title: 'Hosting',
      description:
        'Fast, reliable hosting solutions for websites and online businesses.'
    },
    {
      icon: <FaGlobe />,
      title: 'Domain Registration',
      description:
        'Register and manage your perfect domain with simple, affordable domain solutions.'
    }
  ]

  const values = [
    {
      icon: <FaCode />,
      title: 'Quality First',
      description: 'Delivering quality solutions with attention to every detail.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Creative Thinking',
      description: 'Finding practical and modern solutions for business challenges.'
    },
    {
      icon: <FaHandshake />,
      title: 'Customer Focus',
      description: 'Building lasting relationships through honest communication.'
    }
  ]

  const countries = ['Pakistan', 'UK', 'USA', 'Australia', 'Europe']

  return (
    <main className="bg-white text-[#202020] font-[Arial] overflow-hidden">

      {/* Hero Section */}
      <section className="bg-[#171717] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[#c5a477] uppercase tracking-[4px] text-xs font-bold mb-6">
              About FMEOS
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8">
              Your Trusted Digital Partner for Businesses in Pakistan and Beyond.
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-8 max-w-2xl">
              I combine practical technology, creative thinking and personal
              support to help businesses build a stronger online presence.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-10 bg-[#c5a477] text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-black transition duration-300"
            >
              Let's Talk About Your Project
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <p className="text-[#b18b5c] text-xs font-bold tracking-[3px] uppercase mb-5">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-7">
              Technology That Helps Businesses Grow.
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              FMEOS is an independent digital solutions brand focused on
              helping businesses establish and grow their online presence
              through modern technology and reliable support.
            </p>

            <p className="text-gray-600 leading-8">
              I manage projects independently and collaborate with trusted
              external professionals and service providers whenever a project
              requires additional expertise.
            </p>
          </div>

          <div className="bg-[#f6f3ee] p-8 md:p-12">
            <div className="space-y-9">

              <div>
                <span className="text-[#b18b5c] text-xs tracking-[3px] font-bold uppercase">
                  01 / Mission
                </span>
                <h3 className="text-2xl font-bold mt-3 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-7">
                  To provide reliable, affordable and high-quality web
                  solutions that help businesses succeed in the digital world.
                </p>
              </div>

              <div className="border-t border-gray-300 pt-8">
                <span className="text-[#b18b5c] text-xs tracking-[3px] font-bold uppercase">
                  02 / Vision
                </span>
                <h3 className="text-2xl font-bold mt-3 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-7">
                  To make professional digital solutions accessible to
                  businesses and individuals across Pakistan and beyond.
                </p>
              </div>

              <div className="border-t border-gray-300 pt-8">
                <span className="text-[#b18b5c] text-xs tracking-[3px] font-bold uppercase">
                  03 / Values
                </span>
                <h3 className="text-2xl font-bold mt-3 mb-3">Our Values</h3>
                <p className="text-gray-600 leading-7">
                  Quality over quantity, honest communication, high standards
                  and putting customer satisfaction first.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-14">
            <p className="text-[#b18b5c] text-xs font-bold tracking-[3px] uppercase mb-4">
              The FMEOS Approach
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              Personal Attention. Professional Results.
            </h2>

            <p className="text-gray-600 leading-8">
              Independent expertise, creative thinking and modern technology
              come together to deliver digital solutions that matter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-gray-100 hover:border-[#c5a477] transition duration-300"
              >
                <div className="w-14 h-14 bg-[#f5f0e9] text-[#b18b5c] flex items-center justify-center text-xl mb-7">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-4">{item.title}</h3>

                <p className="text-gray-600 leading-7 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#b18b5c] text-xs font-bold tracking-[3px] uppercase mb-5">
              What I Do
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              One Partner for Every Pixel.
            </h2>

            <p className="text-gray-600 leading-8">
              Everything you need to build, launch and grow your digital
              presence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border border-gray-200 p-8 md:p-10 hover:bg-[#171717] hover:border-[#171717] transition duration-500"
              >
                <div className="text-3xl text-[#b18b5c] mb-7">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-7 group-hover:text-gray-300 transition">
                  {service.description}
                </p>

                <div className="w-10 h-[2px] bg-[#c5a477] mt-8 group-hover:w-20 transition-all duration-500" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* International Section */}
      <section className="bg-[#171717] py-20 md:py-28 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <p className="text-[#c5a477] text-xs font-bold tracking-[3px] uppercase mb-5">
              Global Reach
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-7">
              Quality Work with International Standards.
            </h2>

            <p className="text-gray-400 leading-8 mb-6">
              FMEOS works with businesses in Pakistan and internationally,
              combining local understanding with modern digital standards.
            </p>

            <p className="text-gray-400 leading-8">
              Based in Pakistan, I manage projects independently and serve
              clients across different countries. My focus is on delivering
              reliable solutions that meet real business needs.
            </p>
          </div>

          <div className="bg-[#242424] p-8 md:p-12">
            <p className="text-[#c5a477] text-xs font-bold tracking-[3px] uppercase mb-8">
              Service Regions
            </p>

            <div className="grid grid-cols-2 gap-5">
              {countries.map((country, index) => (
                <div
                  key={country}
                  className="flex items-center gap-3 border-b border-gray-700 pb-5"
                >
                  <FaCheckCircle className="text-[#c5a477] text-sm" />
                  <span className="font-semibold">{country}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-xs mt-9 leading-6">
              Serving businesses across Pakistan, the UK, USA, Australia
              and Europe.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose FMEOS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <p className="text-[#b18b5c] text-xs font-bold tracking-[3px] uppercase mb-5">
              Why FMEOS
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-7">
              Technology Is What I Do. Relationships Are How I Grow.
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              I don't believe in one-size-fits-all solutions. Every business
              has different goals, challenges and requirements. That's why I
              take time to understand your needs and recommend practical
              solutions.
            </p>

            <p className="text-gray-600 leading-8">
              Whether you're a startup, growing SME or established business,
              you get direct communication, personal attention, practical
              advice and a commitment to your long-term success.
            </p>
          </div>

          <div className="bg-[#f6f3ee] p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-7">
              What You Can Expect
            </h3>

            <div className="space-y-6">
              {[
                'Direct communication and personal attention',
                'Practical advice for your business',
                'Transparent pricing and fixed quotes',
                'Quality-focused project delivery',
                'Ongoing support beyond launch'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <FaCheckCircle className="text-[#b18b5c] mt-1 shrink-0" />
                  <p className="text-gray-700 text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5f1eb] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-[#b18b5c] text-xs font-bold tracking-[3px] uppercase mb-6">
            Free Consultation · Fixed Quotes · No Hidden Fees
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-7">
            Let's Build Something Real.
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-8 max-w-2xl mx-auto mb-10">
            Tell me about your project, and let's turn your ideas into a
            digital solution that works for your business.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#171717] text-white px-9 py-4 text-sm font-bold hover:bg-[#b18b5c] transition duration-300"
          >
            Start Your Project
            <FaArrowRight />
          </Link>

        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-7">

          <div>
            <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
            <p className="text-sm text-gray-500">
              Have a project in mind? Get in touch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="tel:+123456"
              className="flex items-center gap-3 text-sm hover:text-[#b18b5c] transition"
            >
              <FaPhoneAlt className="text-[#b18b5c]" />
              PK +92 123456
            </a>

            <a
              href="tel:+123456"
              className="flex items-center gap-3 text-sm hover:text-[#b18b5c] transition"
            >
              <FaPhoneAlt className="text-[#b18b5c]" />
              UK +44 123456
            </a>

            <a
              href="tel:+123456"
              className="flex items-center gap-3 text-sm hover:text-[#b18b5c] transition"
            >
              <FaPhoneAlt className="text-[#b18b5c]" />
              US +1 123456
            </a>
          </div>

        </div>
      </section>

    </main>
  )
}

export default About
