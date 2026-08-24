import { useState } from 'react'

function PortfolioPage({ onBack }) {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'Wireless RC Car',
      category: 'Embedded Systems',
      summary: 'A wireless-controlled vehicle using Arduino, NRF24L01 communication, motor drivers, and servo control.',
      description: 'Project details here.',
      technologies: ['Arduino', 'C++', 'NRF24L01', 'L298N'],
      github: '#',
    },
  ]

  return (
    <div className="portfolio-page">
      <div className="portfolio-topbar">
        <button className="return-button" onClick={onBack}>Return</button>
      </div>

      <main className="portfolio-content">
        <section className="section">
          <div className="section-heading">
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-folder">⌁</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="technology-list">
                  {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.github}>GitHub ↗</a>
                  <button className="details-button" onClick={() => setSelectedProject(project)}>
                    Details →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-category">{selectedProject.category}</span>
              <h3>{selectedProject.title}</h3>
            </div>
            <p className="modal-summary">{selectedProject.summary}</p>
            <p className="modal-description">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default PortfolioPage
