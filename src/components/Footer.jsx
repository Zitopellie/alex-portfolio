function Footer() {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  
    return (
      <footer className="relative bg-black py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="text-center max-w-4xl">
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-12 h-12 border-4 border-white/10 bg-black flex items-center justify-center mx-auto mb-8 hover:border-white/20 transition-colors"
                aria-label="Back to top"
              >
                <svg 
                  className="w-4 h-4 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 15l7-7 7 7" 
                  />
                </svg>
              </button>
  
              {/* Horizontal Line */}
              <div className="h-px bg-white/20 mb-8"></div>
  
  
              {/* Social Links */}
              <ul className="flex justify-center space-x-8 mb-8">
                <li>
                  <a
                    href="https://www.linkedin.com/in/alex-omidire-069473218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-xs font-medium uppercase tracking-wider hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Zitopellie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-xs font-medium uppercase tracking-wider hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/document/d/12Y6SI1X3vDdgXy5hA6LOu4XA9BaUUCjQk3zibYul688/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-xs font-medium uppercase tracking-wider hover:text-white transition-colors"
                  >
                    Resume
                  </a>
                </li>
              </ul>
  
              {/* Copyright */}
              <p className="text-white/40 text-xs">
                &copy; {new Date().getFullYear()} <span className="text-white/60">Alex Omidire (Zitopellie)</span>. All rights reserved.
                <br />
                <span className="text-white/30 text-xs block mt-2">
                  &copy; All other trademarks and trade names are the property of their respective owners.
                </span>
              </p>
  
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer