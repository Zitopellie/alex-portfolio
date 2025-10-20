import { useParams, Link } from 'react-router'
import { projectsData } from '../data/projects'

function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-32">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Project Not Found</h2>
          <Link to="/" className="text-[#D4AF37] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop()
    return `https://www.youtube.com/embed/${videoId}`
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Project Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-6">{project.gameName}</h2>
          <div className="flex justify-center mb-8">
            <img
              src={project.imageLink}
              alt={project.gameName}
              className="max-w-md w-full h-auto"
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8">
            
            {/* Work Done Section */}
            <div className="mb-12">
              <p className="text-white text-sm leading-relaxed mb-6 font-light">
                During my time working on <strong>{project.gameName}</strong>, I played a key role in bringing this project to life. Here are some of the key achievements and contributions:
              </p>
              <ul className="space-y-3">
                {project.workDone.map((work, index) => (
                  <li key={index} className="text-white text-sm leading-relaxed font-light flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">✓</span>
                    <span>{work}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-white/20 my-8" />

            {/* Technologies Used */}
            <div className="mb-12">
              <h5 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
                Technologies Used
              </h5>
              <div className="flex flex-wrap gap-3">
                {project.technologiesUsed.map((tech, index) => (
                  <span
                    key={index}
                    className="text-white/80 text-sm font-light flex items-center"
                  >
                    <span className="text-yellow-500 mr-2">⚙</span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <hr className="border-white/20 my-8" />

            {/* Team Collaboration */}
            <div className="mb-12">
              <h5 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
                Team Collaboration
              </h5>
              <p className="text-white text-sm leading-relaxed font-light">
                {project.teamCollaboration}
              </p>
            </div>

            <hr className="border-white/20 my-8" />

            {/* Video Section */}
            <div className="mb-12">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={getYouTubeEmbedUrl(project.youtubeLink)}
                  title={`${project.gameName} Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-8">
              
              {/* Description */}
              <div>
                <p className="text-white text-sm leading-relaxed font-light mb-6">
                  {project.youtubeDescription}
                </p>
                <hr className="border-white/20 my-6" />
              </div>

              {/* Platform */}
              {project.platform && (<div>
                <span className="block text-xs font-bold text-white uppercase tracking-wide mb-2">
                  Platform
                </span>
                <span className="text-white text-sm font-light">
                  {project.platform.join(', ')}
                </span>
              </div>)}

              {/* Category */}
              <div>
                <span className="block text-xs font-bold text-white uppercase tracking-wide mb-2">
                  Category
                </span>
                <span className="text-white text-sm font-light">
                  {project.gameCategories.join(', ')}
                </span>
              </div>

              {/* Employer */}
              <div>
                <span className="block text-xs font-bold text-white uppercase tracking-wide mb-2">
                  Employer
                </span>
                <a
                  href={project.employerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-light hover:text-white/70 transition-colors"
                >
                  {project.employer}
                </a>
              </div>

              {/* Game Build Link */}
              {project.gamebuild && (
                <div>
                  <span className="block text-xs font-bold text-white uppercase tracking-wide mb-2">
                    Website
                  </span>
                  <a
                    href={project.gamebuild}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-light hover:text-white/70 transition-colors break-all"
                  >
                    {project.gamebuild}
                  </a>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Back to Projects Link */}
        <div className="mt-16 text-center">
          <Link
            to="/#projects"
            className="inline-block text-[#D4AF37] text-sm font-medium tracking-wide hover:text-[#B4941F] transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetail