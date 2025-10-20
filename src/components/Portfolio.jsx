import { useState } from 'react'
import { Link } from 'react-router'
import { projectsData } from '../data/projects'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('See All')
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [animating, setAnimating] = useState(false)

  const filters = ['See All', 'Unreal Engine', 'Unity Engine', 'UEFN', 'Other']

  const getFilteredProjects = (filter) => {
    if (filter === 'See All') return projectsData
    if (filter === 'Other') {
      return projectsData.filter(
        (project) =>
          !project.gameEngine ||
          !['Unreal Engine', 'Unity Engine', 'UEFN'].includes(project.gameEngine)
      )
    }
    return projectsData.filter((project) => project.gameEngine === filter)
  }

  const handleFilterChange = (filter) => {
    if (filter === activeFilter) return
    setAnimating(true) // trigger fade/scale out
    setTimeout(() => {
      setActiveFilter(filter)
      setFilteredProjects(getFilteredProjects(filter))
      setAnimating(false) // fade/scale back in
    }, 300) // match CSS transition duration
  }

  return (
    <section id="projects" className="py-24 bg-black border-t border-white/20">
      <div className="container mx-auto px-6">
        
        {/* Header and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 pb-8 border-b border-white/20">
          <h3 className="text-4xl font-bold text-white mb-6 md:mb-0">Work Portfolio</h3>
          <div className="flex flex-wrap gap-4 md:gap-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`hover:cursor-pointer font-normal tracking-wide transition-colors ${
                  activeFilter === filter
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with smooth fade+scale */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 transition-all duration-300 ease-in-out ${
            animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group block bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
            >
              <div className="overflow-hidden">
                <img
                  src={project.imageLink}
                  alt={project.gameName}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-95"
                />
              </div>

              <div className="p-4 flex flex-col justify-between h-24">
                <p className="text-white/60 font-light">{project.role}</p>
                <h3 className="text-white text-xl font-bold group-hover:text-white/80 transition-colors line-clamp-2">
                  {project.gameName}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
