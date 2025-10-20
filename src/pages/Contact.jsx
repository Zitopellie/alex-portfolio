import { useState } from 'react'
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form will be handled by Formspree
    e.target.submit()
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Contact</h1>
            <p className="text-white text-lg font-light">Let's get in touch!</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Profile Image */}
            <div className="lg:col-span-4">
              <img
                src="https://res.cloudinary.com/di6ow3awo/image/upload/v1760351256/Headshot_ohah9m.jpg"
                alt="Alex Omidire (Zitopellie)"
                className="w-full h-auto"
              />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                
                <div>
                  <span className="block font-bold text-white/50 uppercase tracking-wide mb-2">
                    Email
                  </span>
                  <a
                    href="mailto:alexomidire@gmail.com"
                    className="text-white font-light hover:text-white/70 transition-colors"
                  >
                    alexomidire@gmail.com
                  </a>
                </div>

                <div>
                  <span className="block font-bold text-white/50 uppercase tracking-wide mb-2">
                    Phone
                  </span>
                  <a
                    href="tel:+2349014554819"
                    className="text-white font-light hover:text-white/70 transition-colors"
                  >
                    +2349014554819
                  </a>
                </div>

                <div>
                  <span className="block font-bold text-white/50 uppercase tracking-wide mb-2">
                    Location
                  </span>
                  <address className="text-white font-light not-italic">
                    Open for relocation
                  </address>
                </div>

                <div>
      <span className="block font-bold text-white/50 uppercase tracking-wide mb-4">
        Connect with me
      </span>

      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/alex-omidire-069473218"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-white/70 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Zitopellie"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-white/70 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://docs.google.com/document/d/12Y6SI1X3vDdgXy5hA6LOu4XA9BaUUCjQk3zibYul688/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-white/70 transition-colors"
          aria-label="Resume"
        >
          <FaFileAlt />
        </a>
      </div>
    </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-5">
              <form
                method="post"
                action="https://formspree.io/f/xvgwyydo"
                onSubmit={handleSubmit}
                className="space-y-12"
              >
                
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-white/20 text-white text-sm py-2 px-0 focus:outline-none focus:border-white transition-colors"
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-0 text-xs text-white/50 uppercase tracking-wide transition-all ${
                        formData.name ? '-top-6' : 'top-2'
                      }`}
                    >
                      Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-0 border-b border-white/20 text-white text-sm py-2 px-0 focus:outline-none focus:border-white transition-colors"
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-0 text-xs text-white/50 uppercase tracking-wide transition-all ${
                        formData.email ? '-top-6' : 'top-2'
                      }`}
                    >
                      Email
                    </label>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    rows="7"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-white/20 text-white text-sm py-2 px-0 focus:outline-none focus:border-white transition-colors resize-none"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className={`absolute left-0 text-xs text-white/50 uppercase tracking-wide transition-all ${
                      formData.message ? '-top-6' : 'top-2'
                    }`}
                  >
                    Message
                  </label>
                </div>

                {/* Honeypot (hidden field for spam protection) */}
                <div className="hidden">
                  <label htmlFor="honeypot">Leave this field blank</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-start">
                  <button
                    type="submit"
                    className="relative inline-block group"
                  >
                    <span className="relative inline-block px-12 py-3">
                      <span className="absolute left-0 top-1/2 w-10 h-px bg-white -translate-y-1/2 -translate-x-full group-hover:w-12 transition-all"></span>
                      <span className="text-white text-sm font-medium tracking-wide uppercase group-hover:text-white/80 transition-colors">
                        Send Message
                      </span>
                    </span>
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact