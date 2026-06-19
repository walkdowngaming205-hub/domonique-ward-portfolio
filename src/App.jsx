import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h3>DOMONIQUE WARD</h3>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="heroTag">Developer Portfolio</p>

        <img
          src="/images/headshot.jpg"
          alt="Domonique Ward"
          className="profileImage"
        />

        <h1>DOMONIQUE WARD</h1>
        <h2>Software Engineer</h2>

        <p>
          Full Stack Developer specializing in React, JavaScript, Node.js,
          Express, and MongoDB. Experienced building responsive business
          websites, REST APIs, dashboards, and database-driven applications.
        </p>

        <div className="heroButtons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resumeBtn"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>

        <p>
          I am a software engineering student focused on full-stack web
          development. I enjoy building real-world applications, solving
          technical problems, and creating clean user experiences. I am
          currently completing the Nucamp Software Engineering Program while
          building production-ready projects.
        </p>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>

        <div className="skillGrid">
          <div className="skillCard">
            <FaCode />
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React, Responsive Design</p>
          </div>

          <div className="skillCard">
            <FaServer />
            <h3>Backend</h3>
            <p>Node.js, Express, REST APIs, Authentication</p>
          </div>

          <div className="skillCard">
            <FaDatabase />
            <h3>Database</h3>
            <p>MongoDB, Mongoose, MongoDB Compass</p>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <h2>Experience</h2>

        <div className="experienceCard">
          <h3>Freelance Web Developer</h3>
          <span>2025 - Present</span>

          <p>
            Designed and developed responsive websites, business landing pages,
            and full-stack web applications using React, JavaScript, Node.js,
            Express, and MongoDB.
          </p>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="projectGrid">
          <div className="projectCard">
            <h3>Tracey Shenise Website</h3>
            <p>
              Luxury hair brand website featuring product pages, shopping
              experience, TikTok media, and responsive design.
            </p>

            <div className="projectTags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="projectLinks">
              <a
                href="https://walkdowngaming205-hub.github.io/tracey-shenise-website/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/walkdowngaming205-hub/tracey-shenise-website"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="projectCard">
            <h3>Artist Hub</h3>
            <p>
              React-based music platform project built to showcase artist
              content, frontend structure, and reusable components.
            </p>

            <div className="projectTags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <div className="projectLinks">
              <a
                href="https://github.com/walkdowngaming205-hub/artist-hub"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="projectCard">
            <h3>Nucamp REST API</h3>
            <p>
              Express and MongoDB backend featuring authentication,
              authorization, file uploads, CORS, HTTPS, and REST API endpoints.
            </p>

            <div className="projectTags">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
          </div>

          <div className="projectCard">
            <h3>Portfolio Website</h3>
            <p>
              Personal developer portfolio built with React, responsive design,
              reusable sections, and clean UI styling.
            </p>

            <div className="projectTags">
              <span>React</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>

        <ul>
          <li>Nucamp Full Stack Web and Mobile Development Bootcamp</li>
          <li>Nucamp Front-End Web and Mobile Development Bootcamp</li>
          <li>Nucamp Front-End Web Development: React</li>
          <li>Nucamp JavaScript Fundamentals</li>
          <li>Nucamp Web Development Fundamentals</li>
        </ul>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>

        <p>
          I am open to Software Engineer, Front-End Developer, and Full-Stack
          Developer opportunities.
        </p>

        <p>Email: walkdowngaming@icloud.com</p>
        <p>Location: Dallas, Texas</p>

        <div className="socials">
          <a
            href="https://github.com/walkdowngaming205-hub"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/domonique-ward-3b6069403/" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Domonique Ward</p>
      </footer>
    </div>
  );
}

export default App;