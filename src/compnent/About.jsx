import { Link } from "react-router-dom";
import "./About.css";

// Put your second photo in the /public folder with this name
// (or change the file name here).
const AboutPic = `${process.env.PUBLIC_URL}/Shubuu-about.png`;
// Used automatically if the new photo is missing
const FallbackPic = `${process.env.PUBLIC_URL}/Shubuu.png`;

const skillGroups = [
  {
    category: "Frontend",
    technologies: ["React", "Redux Toolkit", "JavaScript", "HTML & CSS"],
  },
  {
    category: "Backend & data",
    technologies: ["MERN stack", "MySQL", "JWT", "Java"],
  },
  {
    category: "Tools",
    technologies: ["Postman", "Git", "GitHub"],
  },
  {
    category: "Game development",
    technologies: ["C#", "Unity", "Game development"],
  },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-page-hero" aria-labelledby="about-page-title">
        <div className="about-page-copy">
          <p className="about-page-eyebrow">ABOUT ME</p>
          <h1 id="about-page-title">
            Building for the web,
            <span> one idea at a time.</span>
          </h1>
          <p className="about-page-lead">
            Hello, I’m Shubham Padhy — a motivated developer who enjoys turning
            thoughtful ideas into clear, useful digital experiences.
          </p>
          <p className="about-page-description">
            I’m interested in both the creative and technical sides of web
            development. I enjoy building responsive interfaces, learning new
            tools, and improving each project through careful attention to
            usability and detail.
          </p>
          <div className="about-page-actions">
            <Link className="about-primary-link" to="/contact">
              Let’s talk <span aria-hidden="true">→</span>
            </Link>
            <Link className="about-secondary-link" to="/project">
              Explore projects
            </Link>
          </div>
        </div>
        <div className="about-page-portrait-wrap">
          <div className="about-page-portrait-glow" aria-hidden="true" />
          <img
            className="about-page-portrait"
            src={AboutPic}
            alt="Shubham Padhy"
            onError={(event) => {
              // Stop looping, then fall back to the original photo
              event.currentTarget.onerror = null;
              event.currentTarget.src = FallbackPic;
            }}
          />
          <span className="about-page-status">
            <span aria-hidden="true" />
            Open to opportunities
          </span>
        </div>
      </section>

      <section className="about-page-skills" aria-labelledby="about-skills-title">
        <div className="about-page-skills-heading">
          <p className="about-page-eyebrow">WHAT I WORK WITH</p>
          <h2 id="about-skills-title">My technology toolkit</h2>
          <p>From full-stack web apps to interactive game experiences.</p>
        </div>
        <div className="about-page-skill-groups">
          {skillGroups.map((group) => (
            <section className="about-page-skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <div className="about-page-skill-list">
                {group.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;