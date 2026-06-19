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
      <section className="hero">
        <h1>DOMONIQUE WARD</h1>
        <h2>Software Engineer</h2>

        <p>
          Building modern web applications with React, Node.js,
          Express, MongoDB, and JavaScript.
        </p>

        <div className="heroButtons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>

        <p>
          Software Engineering student focused on full-stack web
          development. Passionate about building real-world
          applications, solving problems, and creating clean user
          experiences.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>

        <div className="skillGrid">
          <div className="skillCard">
            <FaCode />
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="skillCard">
            <FaServer />
            <h3>Backend</h3>
            <p>Node.js, Express, REST APIs</p>
          </div>

          <div className="skillCard">
            <FaDatabase />
            <h3>Database</h3>
            <p>MongoDB, Mongoose</p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>

        <div className="projectGrid">

          <div className="projectCard">
            <h3>Tracey Shenise Website</h3>
            <p>
              Luxury hair brand website featuring product pages,
              shopping experience, and responsive design.
            </p>
          </div>

          <div className="projectCard">
            <h3>WalkDown Dashboard</h3>
            <p>
              React dashboard with custom widgets and modern UI.
            </p>
          </div>

          <div className="projectCard">
            <h3>Nucamp REST API</h3>
            <p>
              Express and MongoDB backend featuring authentication,
              authorization, uploads, and API endpoints.
            </p>
          </div>

        </div>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>

        <ul>
          <li>Responsive Web Design</li>
          <li>JavaScript Algorithms & Data Structures</li>
          <li>Nucamp Software Engineering Program</li>
        </ul>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>

        <div className="socials">
          <a href="https://github.com/walkdowngaming205-hub">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;