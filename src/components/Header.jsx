import { useState } from 'react'
import { Link } from 'react-router'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'HOME', href: '/', isRoute: true },
    { label: 'PROJECTS', href: '/#projects' },
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/alex-omidire-069473218', external: true },
    { label: 'GITHUB', href: 'https://github.com/Zitopellie', external: true },
    { label: 'RESUME', href: 'https://docs.google.com/document/d/12Y6SI1X3vDdgXy5hA6LOu4XA9BaUUCjQk3zibYul688/', external: true },
    { label: 'CONTACT ME', href: '/contact', isRoute: true }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-end py-4">
         

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navItems.map((item, index) => (
              <span key={index} className="flex items-center">
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className="text-white text-xs font-normal tracking-wide hover:text-gray-400 transition-colors px-5 py-2.5"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : '_self'}
                    rel={item.external ? 'noopener noreferrer' : ''}
                    className="text-white text-xs font-normal tracking-wide hover:text-gray-400 transition-colors px-5 py-2.5"
                  >
                    {item.label}
                  </a>
                )}
                {index < navItems.length - 1 && (
                  <span className="w-px h-4 bg-gray-200 rotate-45"></span>
                )}
              </span>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Bottom Border */}
        <div className="h-px bg-white"></div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 bg-black">
            {navItems.map((item, index) => (
              item.isRoute ? (
                <Link
                  key={index}
                  to={item.href}
                  className="block py-3 text-white text-sm tracking-wide hover:text-gray-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : ''}
                  className="block py-3 text-white text-sm tracking-wide hover:text-gray-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header