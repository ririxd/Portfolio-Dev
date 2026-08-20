import { useEffect, useState } from 'react'

const projects = [
  {
    title: 'Wireless RC Car',
    category: 'Embedded Systems',
    summary:
      'A wireless-controlled vehicle using Arduino, NRF24L01 communication, motor drivers, and servo control.',
    description:
      'This project focused on building a remote-controlled vehicle using Arduino, radio communication, motor control, and sensor-based movement logic. It combined embedded systems knowledge with Arduino Based',
    technologies: ['Arduino', 'C++', 'NRF24L01', 'L298N'],
    github: 'https://github.com/ririxd',
  },
  {
    title: 'Hardware Inventory System',
    category: 'Software',
    summary:
      'A software application designed to manage hardware items, quantities, records, and inventory information.',
    description:
      'The inventory system was created to organize hardware records, track quantities, and simplify data access for maintenance and asset monitoring tasks. It emphasizes practical usability and efficiency.',
    technologies: ['Python', 'SQLite', 'CRUD'],
    github: 'https://github.com/ririxd/sample-programs--py-db-sqlite3-',
  },
  {
   title: 'Hardware Integration and Troubleshooting',
    category: 'Hardware',
    summary:
      'Schematic capture and PCB layout for custom electronics circuits with practical hardware design and electrical planning.',
    description:
      'This project involved schematic capture and PCB layout for a custom electronics circuit. It focused on practical hardware design, electrical planning, and implementing a board for a real-world application.',
    technologies: ['KiCad', 'PCB Design', 'Electronics'],
    github: null,
  },
  {
    title: 'Network Configuration',
    category: 'Networking',
    summary:
      'Hands-on networking projects involving IP addressing, subnetting, network troubleshooting, and packet analysis.',
    description:
      'These networking exercises centered on IP addressing, subnet design, troubleshooting, and analyzing packet behavior to improve understanding of real-world network configuration and communication',
    technologies: ['Networking', 'IPv4', 'IPv6', 'Cisco Packet Tracer'],
    github: null,
  },
]

const skills = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/python.svg' },
  { name: 'Java', logo: 'https://cdn.simpleicons.org/openjdk/ffffff' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/cplusplus.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/javascript.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/react.svg' },
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/html5.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/css3.svg' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/mysql.svg' },
  { name: 'Cisco Packet Tracer', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/cisco.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/git.svg' },
  { name: 'Arduino', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/arduino.svg' },
  { name: 'KiCad', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/kicad.svg' },
]

const learningItems = [
  {
    id: 1,
    title: 'React & TypeScript',
    short: 'Building modern, maintainable frontend applications.',
    detail:
      'Focused on reusable components, type safety, and scalable frontend architecture.',
  },
  {
    id: 2,
    title: 'Backend Development',
    short: 'Learning APIs, databases, authentication, and server-side development.',
    detail:
      'Exploring REST APIs, database design, auth flows, and full-stack integration patterns.',
  },
  {
    id: 3,
    title: 'Data Structures',
    short: 'Improving problem-solving and algorithmic thinking for software engineering.',
    detail:
      'Strengthening algorithmic thinking through arrays, trees, graphs, and optimization strategies.',
  },
]

function PortfolioPage({ onBack }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [isLinkedInOpen, setIsLinkedInOpen] = useState(false)

  useEffect(() => {
    if (!isLinkedInOpen) return undefined

    const script = document.createElement('script')
    script.src = 'https://platform.linkedin.com/badges/js/profile.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsLinkedInOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      script.remove()
    }
  }, [isLinkedInOpen])

  return (
    <div className="portfolio-page">
      <div className="portfolio-topbar">
        <button className="return-button" onClick={onBack}>
          Return
        </button>
      </div>

      <main className="portfolio-content">
        <section id="about" className="section">
          <div className="section-heading section-heading-center">
            <h2>About Me</h2>
          </div>

          <p className="section-text">
            I'm a Computer Engineering student interested in software engineering,
            embedded systems, and practical technology solutions.
          </p>
        </section>

        <section id="skills" className="section">
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

        <section id="projects" className="section">
          <div className="section-heading">
            <h2>Projects and Experience</h2>
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

        <section id="education" className="section">
          <div className="section-heading">
            <h2>Education</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2023 — PRESENT</span>
                <h3>National University Manila</h3>
                <h4>Bachelor of Science in Computer Engineering</h4>
                <p>
                  Developing knowledge and practical experience in software
                  development, computer architecture, embedded systems,
                  networking, electronics, and digital systems.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">2021 — 2023</span>
                <h3>Technological Institute of the Philippines</h3>
                <h4>Science, Technology, Engineering and Mathematics</h4>
                <p>
                  Built a strong foundation in science, mathematics, engineering,
                  and technology through STEM-focused academic learning and projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>Researches Conducted</h2>
          </div>

          <div className="research-card">
            <span className="research-tag">2024</span>
            <h3>
              Throughput, Fairness, and Retransmission Behavior of TCP Reno and TCP
              Cubic Under Packet Loss in High-Latency Networks
            </h3>
            <p className="research-description">
              Investigated how packet loss affects network performance, fairness, and
              retransmission behavior in high-latency environments using TCP Reno and
              TCP Cubic.
            </p>

            <div className="research-links">
              <a
                href="https://drive.google.com/file/d/1V8ZnEp7KUkEFpMV7AsBus6emRFuzRauE/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Read Paper →
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>Awards</h2>
          </div>

          <div className="awards-grid">
            <div className="award-card">
              <span className="award-badge">2023</span>
              <h3>Graduated with Honors</h3>
              <p>
                Completed the Science, Technology, Engineering and Mathematics strand
                with a GWA of 92.5, reflecting strong academic excellence and
                consistency.
              </p>
            </div>

            <div className="award-card">
              <span className="award-badge">2025</span>
              <h3>IT Customer Support Basics</h3>
              <p>
                Completed the IT Customer Support Basics under CISCO Networking Academy,
                gaining foundational knowledge in IT support.
              </p>

              <div className="award-links">
                <a
                  href="https://www.credly.com/badges/3ad82f00-9951-40fb-b414-6a46bbe8add0"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Badge
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section learning-section">
          <div className="section-heading">
            <h2>Currently Learning</h2>
          </div>

          <div className="learning-grid">
            {learningItems.map((item, index) => (
              <div
                key={item.id}
                className={`learning-card ${expandedIndex === index ? 'expanded' : ''}`}
                onMouseEnter={() => setExpandedIndex(index)}
                onMouseLeave={() => setExpandedIndex(null)}
                onFocus={() => setExpandedIndex(index)}
                onBlur={() => setExpandedIndex(null)}
                tabIndex={0}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.short}</p>
                <div className="learning-detail">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <span className="contact-number">What's next?</span>

          <h2>Let's build something.</h2>

          <p>
            I'm currently building my skills, projects, and experience as I work
            toward a career in software engineering. Work and Grow with me!
          </p>

          <a href="mailto:ricardoespinosa.dev@gmail.com" className="primary-button">
            Say Hello →
          </a>

          <div className="find-me-container">
            <span className="find-me-label">Find me also at</span>
            <div className="social-links">
              <a href="https://github.com/ririxd" target="_blank" rel="noreferrer">
                GitHub
              </a>

              <button
                type="button"
                className="social-link-button"
                onClick={() => setIsLinkedInOpen(true)}
              >
                LinkedIn
              </button>
            </div>
          </div>
        </section>

        <footer className="built-footer">
          <div className="built-footer-inner">
            <p>
              <span>Built by:</span> Ricardo
            </p>
            <p>
              <span>Built with:</span> React, CSS, JavaScript, Vite
            </p>
          </div>
        </footer>
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

      {isLinkedInOpen && (
        <div
          className="linkedin-modal-overlay"
          onClick={() => setIsLinkedInOpen(false)}
        >
          <div
            className="linkedin-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="linkedin-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-button"
              aria-label="Close LinkedIn profile"
              onClick={() => setIsLinkedInOpen(false)}
            >
              ×
            </button>

            <div className="modal-header">
              <span className="modal-category">LinkedIn</span>
              <h3 id="linkedin-modal-title">Connect with Ricardo</h3>
            </div>

            <div
              className="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="large"
              data-theme="dark"
              data-type="HORIZONTAL"
              data-vanity="ricardo-david-espinosa-b8451142b"
              data-version="v1"
            >
              <a
                className="badge-base__link LI-simple-link"
                href="https://ph.linkedin.com/in/ricardo-david-espinosa-b8451142b?trk=profile-badge"
                target="_blank"
                rel="noreferrer"
              >
                Ricardo David Espinosa
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PortfolioPage