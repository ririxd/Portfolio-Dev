import { useState } from 'react'

const projects = [
  {
    title: 'Wireless RC Car',
    category: 'Embedded Systems',
    summary:
      'A wireless-controlled vehicle using Arduino, NRF24L01 communication, motor drivers, and servo control.',
    description:
      'This project focused on building a remote-controlled vehicle using Arduino, radio communication, motor control, and sensor-based movement logic. It combined embedded systems knowledge with hardware integration and control design.',
    technologies: ['Arduino', 'C++', 'NRF24L01', 'L298N'],
    github: 'https://github.com/ririxd',
  },
  {
    title: 'Hardware Inventory System',
    category: 'Software',
    summary:
      'A software application designed to manage hardware items, quantities, records, and inventory information.',
    description:
      'The inventory system was created to organize hardware records, track quantities, and simplify data access for maintenance and asset monitoring tasks. It emphasizes practical usability and efficient record handling.',
    technologies: ['Python', 'SQLite', 'CRUD'],
    github: 'https://github.com/ririxd',
  },
  {
    title: 'Custom PCB Project',
    category: 'Hardware',
    summary:
      'A custom electronics board designed and routed using KiCad, including schematic design and PCB layout.',
    description:
      'This project involved schematic capture and PCB layout for a custom electronics circuit. It focused on practical hardware design, electrical planning, and implementing a board for a real-world application.',
    technologies: ['KiCad', 'PCB Design', 'Electronics'],
    github: null,
  },
  {
    title: 'Network Configuration Projects',
    category: 'Networking',
    summary:
      'Hands-on networking projects involving IP addressing, subnetting, network troubleshooting, and packet analysis.',
    description:
      'These networking exercises centered on IP addressing, subnet design, troubleshooting, and analyzing packet behavior to improve understanding of real-world network configuration and communication.',
    technologies: ['Networking', 'IPv4', 'IPv6', 'Cisco Packet Tracer'],
    github: null,
  },
]

const skills = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/python.svg' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/cplusplus.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/javascript.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/react.svg' },
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/html5.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/css3.svg' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/mysql.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/git.svg' },
  { name: 'Arduino', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/arduino.svg' },
  { name: 'KiCad', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/kicad.svg' },
]

function PortfolioPage({ onBack }) {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="portfolio-page">
      <div className="portfolio-topbar">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
      </div>

      <main className="portfolio-content">
        <section className="section">
          <div className="section-heading section-heading-center">
            <h2>About Me</h2>
          </div>

          <p className="section-text">
            I'm a Computer Engineering student interested in software engineering,
            embedded systems, and practical technology solutions.
          </p>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>Skills</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

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
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  )}

                  <button
                    type="button"
                    className="details-button"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <span className="modal-category">{selectedProject.category}</span>
              <h3>{selectedProject.title}</h3>
            </div>

            <ul className="modal-list">
              <li>
                <span className="modal-summary">{selectedProject.summary}</span>
              </li>
              <li>
                <span className="modal-description">{selectedProject.description}</span>
              </li>
            </ul>

            <div className="technology-list modal-tech">
              {selectedProject.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            {selectedProject.github && (
              <div className="modal-actions">
                <a href={selectedProject.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PortfolioPage