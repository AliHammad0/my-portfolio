
import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaCheck,
  FaWhatsapp,
  FaGlobe,
  FaLaptopCode,
  FaBriefcase,
  FaRocket
} from 'react-icons/fa'

const WHATSAPP_NUMBER = '923114237376'

const packages = [
  {
    name: 'Starter',
    price: 20,
    subtitle: 'Perfect for a simple online presence.',
    icon: <FaGlobe />,
    features: [
      'Single Page Website',
      'Modern & Clean Design',
      'Mobile Responsive Layout',
      'Contact / WhatsApp Button',
      'Basic Animations',
      '1 Revision'
    ]
  },
  {
    name: 'Basic',
    price: 30,
    subtitle: 'A professional start for your business.',
    icon: <FaLaptopCode />,
    features: [
      'Up to 2 Website Pages',
      'Modern UI Design',
      'Mobile & Tablet Responsive',
      'Contact Section',
      'Social Media Links',
      'Basic Animations',
      '1 Revision'
    ]
  },
  {
    name: 'Standard',
    price: 40,
    subtitle: 'More space to showcase your business.',
    icon: <FaBriefcase />,
    popular: true,
    features: [
      'Up to 3 Website Pages',
      'Premium Website Design',
      'Fully Responsive Layout',
      'Contact Form UI',
      'Smooth Animations',
      'Basic On-Page SEO Setup',
      '2 Revisions'
    ]
  },
  {
    name: 'Premium',
    price: 50,
    subtitle: 'A complete professional frontend experience.',
    icon: <FaRocket />,
    features: [
      'Up to 5 Website Pages',
      'Custom Premium UI Design',
      'Fully Responsive Layout',
      'Contact Form UI',
      'Advanced UI Animations',
      'Basic On-Page SEO Setup',
      '3 Revisions'
    ]
  }
]

const Pricing = () => {
  const orderOnWhatsApp = (pkg) => {
    const message = `Hi, I want to order the ${pkg.name} Website Package for $${pkg.price}. Please share the next steps.`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="min-h-screen bg-[#f8f7f4] px-4 py-16 font-[Arial,sans-serif] text-[#171717] sm:px-6 lg:px-8">

      {/* Heading */}
      <section className="mx-auto mb-14 max-w-3xl text-center">
        <span className="mb-5 inline-flex rounded-full border border-[#d8c8a8] bg-[#eee8dc] px-5 py-2 text-xs font-bold uppercase tracking-[2px] text-[#80683f]">
          Simple & Affordable Pricing
        </span>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Choose Your
          <span className="block text-[#a88953]">Perfect Package</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
          Professional websites at affordable prices. Choose a package that
          matches your needs and let's bring your ideas online.
        </p>

        <p className="mt-4 text-sm font-semibold text-gray-500">
          Starting from just $20
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg) => (
          <article
            key={pkg.name}
            className={`relative flex flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
              pkg.popular
                ? 'border-[#a88953] bg-[#171717] text-white shadow-xl'
                : 'border-gray-200 bg-white text-[#171717] shadow-sm'
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#b99b68] px-5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Most Popular
              </span>
            )}

            <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl text-xl ${
              pkg.popular
                ? 'bg-white/10 text-[#d8bd8b]'
                : 'bg-[#f2eee6] text-[#a88953]'
            }`}>
              {pkg.icon}
            </div>

            <h2 className="text-2xl font-bold">{pkg.name}</h2>

            <p className={`mt-2 min-h-[48px] text-sm leading-6 ${
              pkg.popular ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {pkg.subtitle}
            </p>

            <div className="my-7 border-b border-current/10 pb-7">
              <div className="flex items-end gap-1">
                <span className="mb-1 text-lg font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  {pkg.price}
                </span>
              </div>
              <span className={`mt-2 block text-xs ${
                pkg.popular ? 'text-gray-400' : 'text-gray-500'
              }`}>
                One-time starting price
              </span>
            </div>

            <div className="mb-8 flex-1">
              <h3 className="mb-5 text-xs font-bold uppercase tracking-wider">
                What's Included
              </h3>

              <ul className="space-y-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <FaCheck className="mt-0.5 shrink-0 text-[#b99b68]" />
                    <span className={pkg.popular ? 'text-gray-300' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => orderOnWhatsApp(pkg)}
              className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-bold transition duration-300 ${
                pkg.popular
                  ? 'bg-[#b99b68] text-white hover:bg-[#a88953]'
                  : 'bg-[#171717] text-white hover:bg-[#a88953]'
              }`}
            >
              <FaWhatsapp className="text-lg" />
              Order Now
            </button>
          </article>
        ))}
      </section>

      {/* Extra Information */}
      <section className="mx-auto mt-16 max-w-4xl rounded-2xl border border-[#e6dfd3] bg-white p-7 text-center shadow-sm sm:p-10">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Need Something Custom?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          Have a different project in mind? Contact me to discuss your
          requirements and get a custom quote before starting.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I want to discuss a custom website project.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#171717] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#a88953]"
        >
          <FaWhatsapp className="text-lg" />
          Discuss Your Project
        </a>
      </section>

      {/* Note */}
      <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-gray-500">
        Prices cover the listed frontend design and development scope.
        Domain, hosting, paid services, backend development and additional
        features are quoted separately where required.
      </p>

      <div className="mt-10 text-center">
        <Link
          to="/"
          className="text-sm font-semibold text-[#80683f] transition hover:text-black"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default Pricing
