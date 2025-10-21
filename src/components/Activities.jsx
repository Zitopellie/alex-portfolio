import { useEffect, useRef } from 'react'

function Activities() {
  const canvasRef = useRef(null)

  const activities = [
    {
      number: '01',
      title: 'Activities',
      items: [
        'Led my university’s Game Development community (2023/2024), organized workshops, showcases, and onboarding programs that doubled membership and provided essential resources for aspiring developers.',
        'Orchestrated Africa’s largest student game development event with over 100 attendees, featured industry talks, and distributed 50+ offline learning courses to support students with limited internet access, ensuring the growth and continuity of the community beyond my tenure.'
      ],
      link: 'https://www.linkedin.com/posts/alex-omidire-069473218_unityengine-unrealengine-epicgames-activity-7126550857273196544-AwrG/'
    },
    {
      number: '02',
      title: 'Game Jam Organizer & Participant',
      items: [
        'Co-hosted, organized, and competed in multiple Game Jams (including Global Game Jam, GameJam Plus, and Africa Comicade Game Jam), mentored teams, and delivered playable prototypes under tight time constraints.'
      ],
      link: 'https://www.linkedin.com/posts/alex-omidire-069473218_another-successful-global-game-jam-2024-has-activity-7158349392276566017-lyMe/'
    },
    {
      number: '03',
      title: 'Gameplay Programmer',
      items: [
        'Designed and implemented interactive gameplay mechanics in close collaboration with designers; authored C++ and Blueprint code to create reliable, engaging systems.',
        'Troubleshot gameplay issues, profiled systems, and optimized performance to improve stability and frame rate across target platforms.',
        'Worked with artists, level designers, and QA in an agile pipeline; integrated feedback from playtests and iterated on mechanics until they met design and quality goals.'
      ]
    },
    {
      number: '04',
      title: 'Esports Program Manager',
      items: [
        'Planned and ran university and regional esports tournaments, managed logistics, schedules, rulesets, registration, and match operations to deliver smooth competitive events.',
        'Oversaw live streaming, content promotion, and social media outreach to grow event viewership and community participation.',
        'Built relationships with universities, student groups, and sponsors to create competitive pathways, support player development, and spotlight regional talent.'
      ]
    }
  ]
  

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const particles = []
    const particleCount = 200

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create particles
    class Particle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side - Activities List */}
          <div>
            {activities.map((activity, index) => (
              <div key={index} className="relative">
                <div className="flex items-start justify-between py-12 border-b border-white/20">
                  
                  {/* Activity Content */}
                  <div className="flex-1 pr-8">
                    <h5 className="text-xl font-bold text-white mb-6">{activity.title}</h5>
                    <div className="space-y-3">
                      {activity.items.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-white leading-relaxed font-light">
                          — {item}
                        </p>
                      ))}
                    </div>
                    {activity?.link && (
                      <a
                        href={activity.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2"
                      >
                        {activity.link}
                      </a>
                    )}
                  </div>

                  {/* Number */}
                  <div className="text-6xl md:text-7xl font-bold text-white/10 flex-shrink-0">
                    {activity.number}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Particle Animation */}
          <div className="flex items-center justify-center">
            <canvas 
              ref={canvasRef}
              className="w-full h-[600px] bg-black"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Activities