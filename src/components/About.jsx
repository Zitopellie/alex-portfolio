import { Link } from 'react-router'

function About() {
    return (
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Column 1 - About Heading */}
            <div className="lg:col-span-2">
              <h3 className="text-4xl font-bold text-white">About</h3>
            </div>
  
            {/* Column 2 - First Bio Section */}
            <div className="lg:col-span-4">
              <p className="text-white leading-relaxed mb-6 font-light">
              I’m a Gameplay Programmer with a background in Computer Engineering and extensive experience developing games using Unreal Engine, Unity, and Unreal Editor for Fortnite (UEFN).
              </p>
              <p className="text-white leading-relaxed mb-8 font-light">
              I’ve contributed to the development and release of more than five shipped titles across AA and indie projects, specializing in gameplay architecture, systems design, performance optimization, and team mentorship.
              </p>
              
              {/* Let's Connect Button */}
              <Link to="/contact" className="inline-block relative group"> 
                <span className="relative inline-block px-12 py-3">
                  <span className="absolute left-0 top-1/2 w-10 h-px bg-[#D4AF37] -translate-y-1/2 -translate-x-full"></span>
                  <span className="text-[#D4AF37] font-medium tracking-wide">
                    Let's Connect!
                  </span>
                </span>
                </Link>
            </div>
  
            {/* Column 3 - Second Bio Section */}
            <div className="lg:col-span-6">
              <p className="text-white leading-relaxed mb-8 font-light">
              Beyond game development, I’m passionate about building the Nigerian gaming community. I organize Esports competitions across Nigerian universities and advocate for the growth and recognition of local gaming talent.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    )
  }
  
  export default About