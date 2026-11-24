
import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa'

const workProcess = [
  {
    number: '01',
    title: 'Understanding',
    description: 'I understand the business, its goals, target audience and website requirements.',
    icon: <FaLightbulb />
  },
  {
    number: '02',
    title: 'Planning & Design',
    description: 'I plan the website structure and create a clean, professional user experience.',
    icon: <FaLaptopCode />
  },
  {
    number: '03',
    title: 'Development',
    description: 'I turn the approved design into a responsive and functional website.',
    icon: <FaCode />
  },
  {
    number: '04',
    title: 'Final Delivery',
    description: 'I test the website, make final improvements and deliver the completed project.',
    icon: <FaCheckCircle />
  }
]

const services = [
  'Business Websites',
  'E-Commerce Websites',
  'Landing Pages',
  'Custom Web Applications',
  'Responsive Website Design',
  'Website Redesign'
]

const OurWork = () => {
  return (
    <main className="bg-white font-[Arial]">

      {/* Hero Section */}
      <section className="bg-[#171717] text-white py-24 md:py-32 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-[#c5a078] text-sm uppercase tracking-[4px] font-semibold">
              My Approach
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-6 mb-7">
              Every Project Starts With
              <span className="text-[#c5a078]"> A Great Idea.</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-8 max-w-2xl">
              I believe a great website is more than just good design.
              It should communicate your brand, connect with your audience
              and support your business goals.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-9 bg-[#b18a5d] text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Discuss Your Project
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-24 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          <div>
            <span className="text-[#a17b50] text-sm font-bold tracking-[3px] uppercase">
              Beyond The Design
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#171717] leading-tight mt-5 mb-7">
              I Build Websites With
              <span className="text-[#a17b50]"> Purpose.</span>
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              Every business has a different story, audience and objective.
              That's why I focus on understanding the requirements before
              starting development.
            </p>

            <p className="text-gray-600 leading-8">
              From the first discussion to the final launch, I personally
              focus on creating websites that look professional, work
              smoothly and deliver a better experience for visitors.
            </p>
          </div>

          <div className="bg-[#f6f4f0] p-8 md:p-12 rounded-xl">
            <span className="text-[#a17b50] text-sm uppercase tracking-[3px] font-bold">
              My Commitment
            </span>

            <h3 className="text-2xl md:text-3xl font-bold text-[#171717] mt-5 mb-8">
              Quality In Every Detail.
            </h3>

            <div className="space-y-6">
              {[
                'Clean and modern website design',
                'Mobile-friendly development',
                'Focus on performance and usability',
                'Clear communication throughout the project',
                'Attention to every detail'
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <FaCheckCircle className="text-[#a17b50] mt-1 shrink-0" />
                  <p className="text-gray-700 text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Work Process */}
      <section className="bg-[#f8f7f4] py-20 md:py-24 px-5">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#a17b50] text-sm font-bold uppercase tracking-[3px]">
              How I Work
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#171717] mt-5 mb-5">
              From Idea To <span className="text-[#a17b50]">Launch.</span>
            </h2>

            <p className="text-gray-600 leading-7">
              A simple and transparent process that keeps your project
              organized from the beginning to the final delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((step) => (
              <div
                key={step.number}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#b18a5d] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-[#f5f0e9] text-[#a17b50] rounded-lg flex items-center justify-center text-xl">
                    {step.icon}
                  </div>

                  <span className="text-3xl font-bold text-gray-200">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#171717] mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm leading-7">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* What I Build */}
      <section className="py-20 md:py-24 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <span className="text-[#a17b50] text-sm font-bold uppercase tracking-[3px]">
              Areas Of Expertise
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#171717] leading-tight mt-5 mb-6">
              Solutions For
              <span className="text-[#a17b50]"> Your Business.</span>
            </h2>

            <p className="text-gray-600 leading-8">
              Whether you are starting a new business or improving an
              existing one, I can help you build a website that represents
              your brand professionally.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={service}
                className="flex items-center gap-3 p-5 bg-[#f8f7f4] rounded-lg border border-gray-100 hover:border-[#b18a5d] transition-colors"
              >
                <span className="text-[#b18a5d] font-bold text-sm">
                  0{index + 1}
                </span>

                <span className="text-[#171717] text-sm font-semibold">
                  {service}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto bg-[#171717] rounded-2xl px-6 py-16 md:py-20 text-center">
          <span className="text-[#c5a078] text-sm font-bold uppercase tracking-[3px]">
            Let's Create Something
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 mb-6">
            Have An Idea? Let's Build It.
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto leading-8 mb-9">
            Tell me about your business and what you want to achieve.
            I will help you turn your idea into a professional website.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#b18a5d] text-white px-9 py-4 rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            Start Your Project
            <FaArrowRight />
          </Link>
        </div>
      </section>

    </main>
  )
}

export default OurWork
