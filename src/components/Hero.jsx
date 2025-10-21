function Hero() {
    return (
      <section id="home" className="relative min-h-screen flex items-center bg-black pt-32 pb-20">
        {/* Background pattern/texture would go here */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <h1 className="text-4xl font-bold text-white leading-tight">
              Alex Omidire (Zitopellie)
              </h1>
              
              <h2 className="text-lg text-white font-light">
                Gameplay Programmer | Esports Program Manager
              </h2>
              
              {/* <div className="pt-4">
                <p className="text-white mb-4">Currently employed at</p>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://res.cloudinary.com/di6ow3awo/image/upload/v1760351228/dimension_11_logo_lpucoi.jpg" 
                    alt="Dimension 11" 
                    className="h-14"
                  />
                </div>
              </div> */}
            </div>
  
            {/* Right Side - Profile Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className=" bg-gray-800 overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/di6ow3awo/image/upload/v1760351256/Headshot_ohah9m.jpg"
                    alt="Alex Omidire (Zitopellie)" 
                    className="w-full h-auto object-cover max-w-md"
                  />
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero