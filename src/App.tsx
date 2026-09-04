import './App.css'
import GithubIcon from './components/GithubIcon'
import LinkedinIcon from './components/LinkedinIcon'

type Project = {
  title: string
  description: string
  technologies: string[]
  category: string
}

const projects: Project[] = [
  {
    title: 'Wireless RC Car',
    description:
      'A wireless-controlled vehicle using Arduino, NRF24L01 communication, motor drivers, and servo control.',
    technologies: ['Arduino', 'C++', 'NRF24L01', 'L298N'],
    category: 'Embedded Systems',
  },
  {
    title: 'Hardware Inventory System',
    description:
      'A software application designed to manage hardware items, quantities, records, and inventory information.',
    technologies: ['Python', 'SQLite', 'CRUD'],
    category: 'Software',
  },
  {
    title: 'Custom PCB Project',
    description:
      'A custom electronics board designed and routed using KiCad, including schematic design and PCB layout.',
    technologies: ['KiCad', 'PCB Design', 'Electronics'],
    category: 'Hardware',
  },
  {
    title: 'Network Configuration Projects',
    description:
      'Hands-on networking projects involving IP addressing, subnetting, network troubleshooting, and packet analysis.',
    technologies: ['Networking', 'IPv4', 'IPv6', 'Wireshark'],
    category: 'Networking',
  },
]

const skills = [
  'Python',
  'C / C++',
  'JavaScript',
  'TypeScript',
  'React',
  'HTML',
  'CSS',
  'SQL',
  'Git',
  'GitHub',
  'Arduino',
  'KiCad',
]

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            RD<span>.</span>
          </a>

          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            GitHub ↗
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">COMPUTER ENGINEERING • SOFTWARE DEVELOPMENT</p>

            <h1>
              Hi, I'm <span>Ricardo.</span>
            </h1>

            <h2>Building toward Software Engineering.</h2>

            <p className="hero-description">
              I'm a 4th-year Computer Engineering student passionate about
              software development, embedded systems, and building practical
              technology solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Projects
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="terminal-green">$</span> whoami
              </p>

              <p className="terminal-output">ricardo@developer</p>

              <p>
                <span className="terminal-green">$</span> role
              </p>

              <p className="terminal-output">Computer Engineering Student</p>

              <p>
                <span className="terminal-green">$</span> goal
              </p>

              <p className="terminal-output">Software Engineer</p>

              <p>
                <span className="terminal-green">$</span> status
              </p>

              <p className="terminal-output">
                <span className="status-dot"></span> Building...
              </p>

              <p className="cursor">█</p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <span>01.</span>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div>
              <p>
                I'm a 4th-year Computer Engineering student at National
                University Manila with a strong interest in software
                engineering and system development.
              </p>

              <p>
                My Computer Engineering background allows me to work across
                both software and hardware. I've worked with programming,
                databases, microcontrollers, electronics, networking, and PCB
                design.
              </p>

              <p>
                I'm currently focused on strengthening my software development
                skills and building projects that can help me transition into
                the professional software engineering industry.
              </p>
            </div>

            <div className="about-card">
              <div>
                <span>🎓</span>
                <strong>Education</strong>
                <p>Computer Engineering</p>
              </div>

              <div>
                <span>💻</span>
                <strong>Focus</strong>
                <p>Software Engineering</p>
              </div>

              <div>
                <span>🔧</span>
                <strong>Background</strong>
                <p>Hardware & Embedded Systems</p>
              </div>

              <div>
                <span>🚀</span>
                <strong>Goal</strong>
                <p>Build real-world software</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <span>02.</span>
            <h2>Skills</h2>
          </div>

          <p className="section-intro">
            Technologies and tools I've worked with or am currently learning.
          </p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <span>03.</span>
            <h2>Featured Projects</h2>
          </div>

          <p className="section-intro">
            A selection of academic and personal projects I've worked on.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-folder">⌁</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href="https://github.com/" target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>

                  <a href="#contact">Details →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-heading">
            <span>04.</span>
            <h2>Education</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span className="timeline-date">2022 — PRESENT</span>

                <h3>National University Manila</h3>

                <h4>Bachelor of Science in Computer Engineering</h4>

                <p>
                  Developing knowledge and practical experience in software
                  development, computer architecture, embedded systems,
                  networking, electronics, and digital systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section learning-section">
          <div className="section-heading">
            <span>05.</span>
            <h2>Currently Learning</h2>
          </div>

          <div className="learning-grid">
            <div className="learning-card">
              <span>01</span>
              <h3>React & TypeScript</h3>
              <p>Building modern, maintainable frontend applications.</p>
            </div>

            <div className="learning-card">
              <span>02</span>
              <h3>Backend Development</h3>
              <p>
                Learning APIs, databases, authentication, and server-side
                development.
              </p>
            </div>

            <div className="learning-card">
              <span>03</span>
              <h3>Data Structures</h3>
              <p>
                Improving problem-solving and algorithmic thinking for
                software engineering.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <span className="contact-number">06. What's next?</span>

          <h2>Let's build something.</h2>

          <p>
            I'm currently building my skills, projects, and experience as I
            work toward a career in software engineering.
          </p>

          <a href="mailto:your-email@gmail.com" className="primary-button">
            Say Hello →
          </a>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="github-button"
              aria-label="Open GitHub profile"
            >
              <GithubIcon />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-button"
              aria-label="Open LinkedIn profile"
            >
              <LinkedinIcon />
            </a>

            <a href="mailto:your-email@gmail.com">Email</a>
          </div>
        </section>
      </main>

      <footer>
        <p>
          Designed & built by Ricardo © {new Date().getFullYear()}
        </p>

        <p>Built with React + TypeScript</p>
      </footer>
    </div>
  )
}

export default App