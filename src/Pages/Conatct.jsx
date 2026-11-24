
import React, { useState } from 'react'
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaPaperPlane
} from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    interestedIn: '',
    hearAbout: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const services = [
    'Website design',
    'WordPress / Drupal CMS',
    'E-Commerce Solution',
    'Website Maintenance',
    'Custom Web Development',
    'Partnering with us',
    'Others'
  ]

  const sources = [
    'Google',
    'Bing',
    'Yahoo',
    'GoNeedWebsite Link',
    'Television',
    'Referral Friend / Co-Worker',
    'Facebook',
    'Twitter',
    'Other'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactDetails = [
    {
      title: 'Pakistan',
      number: '+92 12345',
      link: 'tel:+12345',
      icon: <FaPhoneAlt />
    },
    {
      title: 'UK / WhatsApp',
      number: '+44 123456',
      link: 'https://wa.me/12345',
      icon: <FaWhatsapp />
    },
    {
      title: 'USA / WhatsApp',
      number: '+1 12345',
      link: 'https://wa.me/12345',
      icon: <FaWhatsapp />
    }
  ]

  return (
    <main className="bg-white text-[#202020] font-[Arial]">

      {/* Hero */}
      <section className="bg-[#171717] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-[#c5a477] text-xs font-bold uppercase tracking-[4px] mb-6">
            Get In Touch
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-4xl mb-7">
            Let's Talk About Your Next Project.
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-8 max-w-2xl">
            Have an idea, a question or a project in mind?
            Tell me what you're looking for and let's find
            the right digital solution for your business.
          </p>

        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5"
              >
                <div className="w-12 h-12 shrink-0 bg-[#f5f1eb] text-[#b18b5c] flex items-center justify-center text-lg">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-bold text-base mb-2">
                    {item.title}
                  </h3>

                  <a
                    href={item.link}
                    target={item.link.startsWith('https') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="text-gray-500 text-sm hover:text-[#b18b5c] transition"
                  >
                    {item.number}
                  </a>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 shrink-0 bg-[#f5f1eb] text-[#b18b5c] flex items-center justify-center text-lg">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-bold text-base mb-2">
                  Office
                </h3>

                <p className="text-gray-500 text-sm leading-7">
                 12345
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-12 gap-14">

            {/* Form Heading */}
            <div className="lg:col-span-4">

              <p className="text-[#b18b5c] text-xs font-bold uppercase tracking-[3px] mb-5">
                Get In Touch
              </p>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-7">
                Send Us a Message.
              </h2>

              <p className="text-gray-500 leading-8 mb-9">
                Tell us a bit about your project and what
                you're looking for. I typically reply within
                a few hours during office hours.
              </p>

              <div className="space-y-6 mb-10">

                {[
                  'No-obligation, free consultation',
                  'Straight answers, no sales pressure',
                  'A real person replies, not a bot'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-[#b18b5c] shrink-0" />
                    <p className="text-gray-600 text-sm">{item}</p>
                  </div>
                ))}

              </div>

              <div className="bg-[#f6f3ee] p-7">
                <div className="flex items-center gap-3 mb-5">
                  <FaClock className="text-[#b18b5c] text-xl" />
                  <h3 className="font-bold text-lg">
                    Office Hours
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-7">
                  Monday – Saturday<br />
                  9:00 AM – 1:00 PM<br />
                  2:30 PM – 5:00 PM PST
                </p>

                <p className="text-xs text-gray-400 mt-4">
                  Closed on Sunday
                </p>
              </div>

            </div>

            {/* Form */}
            <div className="lg:col-span-8">

              <div className="border border-gray-200 p-6 sm:p-9 md:p-12">

                <div className="mb-9">
                  <p className="text-[#b18b5c] text-xs font-bold uppercase tracking-[3px] mb-3">
                    Project Inquiry
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Tell Me About Your Project
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Takes about a minute — I'll take it from there.
                  </p>
                </div>

                {submitted ? (

                  <div className="bg-[#f6f3ee] p-8 text-center">
                    <FaCheckCircle className="text-[#b18b5c] text-4xl mx-auto mb-5" />

                    <h3 className="text-2xl font-bold mb-3">
                      Thank You!
                    </h3>

                    <p className="text-gray-600 text-sm leading-7">
                      Your form has been validated. Connect a backend
                      or email service to deliver your inquiry.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 bg-[#171717] text-white px-7 py-3 text-sm font-semibold hover:bg-[#b18b5c] transition"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>

                ) : (

                  <form onSubmit={handleSubmit} className="space-y-7">

                    {/* Name and Email */}
                    <div className="grid sm:grid-cols-2 gap-6">

                      <div>
                        <label className="block text-sm font-semibold mb-3">
                          Your Name <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          className="w-full border border-gray-200 px-4 py-4 text-sm outline-none focus:border-[#b18b5c] transition"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-3">
                          Your Email <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                          className="w-full border border-gray-200 px-4 py-4 text-sm outline-none focus:border-[#b18b5c] transition"
                        />
                      </div>

                    </div>

                    {/* Company and Phone */}
                    <div className="grid sm:grid-cols-2 gap-6">

                      <div>
                        <label className="block text-sm font-semibold mb-3">
                          Company
                        </label>

                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className="w-full border border-gray-200 px-4 py-4 text-sm outline-none focus:border-[#b18b5c] transition"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-3">
                          Phone <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          required
                          className="w-full border border-gray-200 px-4 py-4 text-sm outline-none focus:border-[#b18b5c] transition"
                        />
                      </div>

                    </div>

                    {/* Website */}
                    <div>
                      <label className="block text-sm font-semibold mb-3">
                        Website
                      </label>

                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourwebsite.com"
                        className="w-full border border-gray-200 px-4 py-4 text-sm outline-none focus:border-[#b18b5c] transition"
                      />
                    </div>

                    {/* Interested In */}
                    <div>
                      <label className="block text-sm font-semibold mb-3">
                        Interested In <span className="text-red-500">*</span>
                      </label>

                      <select
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 px-4 py-4 text-sm bg-white text-gray-600 outline-none focus:border-[#b18b5c] transition"
                      >
                        <option value="">Nothing Selected</option>

                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* How Did You Hear */}
                    <div>
                      <label className="block text-sm font-semibold mb-3">
                        How Did You Hear About Us?
                      </label>

                      <select
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-4 text-sm bg-white text-gray-600 outline-none focus:border-[#b18b5c] transition"
                      >
                        <option value="">Select an option</option>

                        {sources.map((source) => (
                          <option key={source} value={source}>
                            {source}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold mb-3">
                        How Can We Help You?
                      </label>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Tell me a little about your project, goals and requirements..."
                        className="w-full border border-gray-200 px-4 py-4 text-sm outline-none resize-y focus:border-[#b18b5c] transition"
                      />
                    </div>

                    {/* Privacy */}
                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-gray-500">
                      <span className="flex items-center gap-2">
                        <FaCheckCircle className="text-[#b18b5c]" />
                        Your details stay private
                      </span>

                      <span className="flex items-center gap-2">
                        <FaCheckCircle className="text-[#b18b5c]" />
                        Replies within hours
                      </span>

                      <span className="flex items-center gap-2">
                        <FaCheckCircle className="text-[#b18b5c]" />
                        No spam, ever
                      </span>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#171717] text-white px-10 py-4 text-sm font-bold hover:bg-[#b18b5c] transition duration-300"
                    >
                      Send Your Message
                      <FaPaperPlane />
                    </button>

                  </form>

                )}

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Services Help Section */}
      <section className="bg-[#f6f3ee] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-2xl mb-12">
            <p className="text-[#b18b5c] text-xs font-bold uppercase tracking-[3px] mb-5">
              Talk to Us About
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              How Can I Help You?
            </h2>

            <p className="text-gray-600 leading-8">
              Whatever stage your project is at, I'm happy to have
              a no-obligation conversation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {services.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="bg-white p-7 flex items-center gap-4 hover:shadow-md transition"
              >
                <FaCheckCircle className="text-[#b18b5c] shrink-0" />

                <span className="font-semibold text-sm">
                  {service}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#171717] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

          <div>
            <h2 className="text-2xl md:text-4xl text-white font-bold mb-3">
              Have a Project in Mind?
            </h2>

            <p className="text-gray-400 text-sm">
              Let's discuss your ideas and make them happen.
            </p>
          </div>

          <a
            href="mailto:12345@ali.net"
            className="inline-flex items-center gap-3 bg-[#c5a477] text-[#171717] px-8 py-4 text-sm font-bold hover:bg-white transition"
          >
            <FaEnvelope />
            Email Me
          </a>

        </div>
      </section>

    </main>
  )
}

export default Contact
