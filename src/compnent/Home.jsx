import "./Home.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const RobotPic = `${process.env.PUBLIC_URL}/image-removebg-preview.png`;
const ProfilePic = `${process.env.PUBLIC_URL}/Shubuu.png`;
const ConnectLink = `${process.env.PUBLIC_URL}/image.png`;

const featuredProjects = [
    {
        number: "01",
        title: "Portfolio Website",
        subtitle: "A personal space for projects, skills, and connection.",
        description: "A responsive React portfolio introducing my work and development journey, with dedicated sections for projects, background, and ways to get in touch.",
        type: "WEB DESIGN",
        features: ["Responsive portfolio layout", "Project and skills showcase", "Direct contact links"],
        technologies: ["React", "CSS", "React Router"],
    },
    {
        number: "02",
        title: "Currency Converter",
        subtitle: "Simple currency comparisons with current exchange rates.",
        description: "A React application that converts an entered amount between selected currencies using exchange-rate data from the Frankfurter API.",
        type: "REACT APP",
        features: ["Choose source and target currencies", "Convert entered amounts", "Display the converted result"],
        technologies: ["React", "JavaScript", "Frankfurter API"],
    },
    {
        number: "03",
        title: "Unity Game Development",
        subtitle: "Interactive gameplay experiments built with Unity.",
        description: "An exploration of real-time game experiences, combining C# scripting with Unity's tools for building interactive gameplay.",
        type: "GAME DEVELOPMENT",
        features: ["Interactive gameplay concepts", "C# scripting experiments", "Real-time Unity development"],
        technologies: ["C#", "Unity", "Game development"],
    },
];

const technologies = [
    "MERN stack",
    "MySQL",
    "Postman",
    "Git",
    "GitHub",
    "C#",
    "Unity",
    "Game development",
    "Redux Toolkit",
    "JWT",
];

function Home() {
    const [Robot, setRobot] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div className={`robot-page-wrapper ${Robot ? "body-content" : ""}`}>
                <div className="Hero-section">
                    <div className="intro-section">
                        <div className="robot-wrapper" onClick={() => setRobot(Robot ? false : true)}>
                            <div className="bobbing-container">
                                <img src={RobotPic} alt="Robot" className="robot-image" />
                                <div className={Robot ? "hidden" : "hi-message"}>Click me! 👋</div>
                            </div>
                            <div className="shadow"></div>
                        </div>
                    </div>
                    <div className="home-content-container">
                        <div className="name-container">
                            <div className='name'>
                                <div className="hey-buddy">
                                    Hello,
                                </div>
                                <div className='st-name'>I'm <b>Shubham Padhy .</b></div>
                                <div className="typeanimation-conainter">A
                                    <TypeAnimation
                                        sequence={[' Web Developer', 2000, ' Full Stack Developer', 2000, ' Problem Solver', 2000]}
                                        style={{ color: "#00E5FF" }}
                                        repeat={Infinity}
                                    />
                                </div>
                                <div className="caption">
                                    I build digital experiences that work and grow.
                                </div>
                                <div className='intro-btn'>
                                    <div className="project-btn">
                                        <button onClick={() => navigate("/project")}>
                                            <div className="svg-wrapper-1">
                                                <div className="svg-wrapper">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 64 64"
                                                        width="35"
                                                        height="35"
                                                    >
                                                        <g transform="rotate(45 32 32)">
                                                            {/* flame */}
                                                            <path fill="#F59E0B" d="M24 47c-2 4 0 7 3 8-1 2 1 5 5 5s6-3 5-5c3-1 5-4 3-8z" />
                                                            <path fill="#FDE047" d="M28 47c-1 3 0 5 2 6 0 1 1 3 2 3s2-2 2-3c2-1 3-3 2-6z" />
                                                            {/* nozzle */}
                                                            <path fill="#4B5563" d="M24 42h16l-2 6H26z" />
                                                            {/* back fins */}
                                                            <path fill="#EF4444" d="M23 28C14 31 11 40 13 49c6-1 10-6 12-12z" />
                                                            <path fill="#DC2626" d="M41 28c9 3 12 12 10 21-6-1-10-6-12-12z" />
                                                            {/* body */}
                                                            <path fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" d="M32 5c10 8 13 20 11 37H21C19 25 22 13 32 5z" />
                                                            {/* nose cone */}
                                                            <path fill="#EF4444" d="M32 5c4 3 7 8 8 13-5-2-11-2-16 0 1-5 4-10 8-13z" />
                                                            {/* porthole */}
                                                            <circle cx="32" cy="29" r="7.5" fill="#6B7280" />
                                                            <circle cx="32" cy="29" r="5.5" fill="#1E78B4" />
                                                            <ellipse cx="30" cy="27" rx="1.8" ry="1.2" fill="#FFFFFF" opacity="0.8" />
                                                            {/* front fin */}
                                                            <path fill="#EF4444" d="M29 38c-1 4-1 8 1 11h4c2-3 2-7 1-11-2 1-4 1-6 0z" />
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <span>View Project</span>
                                        </button>
                                    </div>
                                    <div className='let-connect-btn'>
                                        <button type="button" onClick={() => navigate("/contact")}>
                                            <div className='connect-log-container'>
                                                <img src={ConnectLink} alt="ConnectLink" />
                                            </div>
                                            <span className="text">Let's connect</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-container">
                            <div className="user-img">
                                <div className="hex-glow">
                                    <div className="hex-bg"></div>
                                </div>
                                <div className="user-photo">
                                    <img src={ProfilePic} alt="Shubham Padhy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="my-section" id="about" aria-labelledby="about-title">
                <hr className="section-divider" />
                <div className='let-intro'>
                    <span id="about-title">Let me introduce myself</span>
                </div>
                <div className='my-section-content'>
                    <div className='lottie-wrapper'>
                        <svg
                            className="about-illustration"
                            viewBox="0 0 400 400"
                            role="img"
                            aria-labelledby="about-illustration-title"
                        >
                            <title id="about-illustration-title">Floating code panels orbiting among the stars</title>
                            <defs>
                                <radialGradient id="about-glow">
                                    <stop offset="0%" stopColor="#00e5ff" stopOpacity=".35" />
                                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
                                </radialGradient>
                                <linearGradient id="about-code-panel" x1="0" x2="1" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#152544" />
                                    <stop offset="100%" stopColor="#0a1123" />
                                </linearGradient>
                            </defs>
                            <circle cx="200" cy="200" r="180" fill="url(#about-glow)" />
                            <circle className="about-orbit about-orbit-one" cx="200" cy="200" r="135" />
                            <ellipse className="about-orbit about-orbit-two" cx="200" cy="200" rx="165" ry="78" />
                            <circle className="about-star" cx="88" cy="112" r="3" />
                            <circle className="about-star" cx="306" cy="95" r="2" />
                            <circle className="about-star" cx="318" cy="279" r="3" />
                            <circle className="about-star" cx="91" cy="286" r="2" />
                            <g className="about-code-float">
                                <rect x="105" y="119" width="190" height="164" rx="15" fill="url(#about-code-panel)" stroke="#38bdf8" strokeOpacity=".65" />
                                <path d="M105 151h190" stroke="#38bdf8" strokeOpacity=".22" />
                                <circle cx="124" cy="135" r="3" fill="#fb7185" />
                                <circle cx="136" cy="135" r="3" fill="#fbbf24" />
                                <circle cx="148" cy="135" r="3" fill="#34d399" />
                                <rect x="122" y="168" width="156" height="96" rx="8" fill="#080d1a" fillOpacity=".9" />
                                <path d="M148 191l-12 11 12 11M178 191l12 11-12 11" fill="none" stroke="#67e8f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                                <path className="about-code-line" d="M202 191h43M202 202h30M146 232h24M181 232h61M146 244h42" fill="none" stroke="#a78bfa" strokeLinecap="round" strokeWidth="3" />
                                <circle cx="259" cy="228" r="5" fill="#67e8f9" />
                            </g>
                            <g className="about-code-token">
                                <rect x="69" y="157" width="48" height="40" rx="12" fill="#111d38" stroke="#a78bfa" strokeOpacity=".75" />
                                <path d="M84 177l6-6 6 6-6 6zm17-6-6 6 6 6" fill="none" stroke="#c4b5fd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                            </g>
                            <g className="about-code-spark">
                                <circle cx="307" cy="252" r="20" fill="#102343" stroke="#38bdf8" strokeOpacity=".7" />
                                <path d="M307 241v22m-11-11h22" stroke="#67e8f9" strokeLinecap="round" strokeWidth="2.5" />
                            </g>
                            <path className="about-star about-star-large" d="M200 83l5 13 13 5-13 5-5 13-5-13-13-5 13-5z" />
                        </svg>
                    </div>
                    <div className="my-intro-text">
                        <p className="about-kicker">A LITTLE ABOUT ME</p>
                        <h2>Curious by nature.<br /><span>Developer by choice.</span></h2>
                        <p>
                            I’m <strong>Shubham Padhy</strong>, a software developer passionate about full-stack development and problem-solving. I enjoy building responsive, user-friendly web applications using React and modern JavaScript technologies, along with developing backend services and working with databases to turn ideas into practical software solutions.
                        </p>
                        <p>
                            I focus on writing clean, maintainable code and continuously improving my technical skills through hands-on projects. Beyond web development, I'm also interested in game development, where I enjoy exploring interactive experiences, creative ideas, and the technologies behind game creation.
                        </p>
                        <div className="about-skill-list" aria-label="Technology interests">
                            {technologies.map((technology) => (
                                <span key={technology}>{technology}</span>
                            ))}
                        </div>
                        <button className="about-contact-link" type="button" onClick={() => navigate("/about")}>
                            More about me <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="featured-projects" aria-labelledby="featured-projects-title">
                <div className="featured-projects-heading">
                    <p className="featured-projects-eyebrow">A FEW THINGS I'VE BUILT</p>
                    <h2 id="featured-projects-title">Featured Projects</h2>
                </div>
                <div className="featured-projects-grid">
                    {featuredProjects.map((project) => (
                        <article className="featured-project-card" key={project.number}>
                            <div className={`featured-project-art featured-project-art-${project.number}`}>
                                <span className="featured-project-number">{project.number}</span>
                                <span className="featured-project-type">{project.type}</span>
                                <div className="featured-project-window featured-project-window-main" aria-hidden="true">
                                    <div className="featured-project-window-bar">
                                        <span />
                                        <span />
                                        <span />
                                        <i>shubham.dev</i>
                                    </div>
                                    <div className="featured-project-window-content">
                                        <span className="featured-project-window-kicker">{project.type}</span>
                                        <strong>{project.title}</strong>
                                        <span className="featured-project-window-rule" />
                                        <span className="featured-project-window-line" />
                                        <span className="featured-project-window-line short" />
                                        <div className="featured-project-window-tiles">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-project-window featured-project-window-overlay" aria-hidden="true">
                                    <div className="featured-project-window-bar">
                                        <span />
                                        <span />
                                        <span />
                                        <i>project preview</i>
                                    </div>
                                    <div className="featured-project-overlay-content">
                                        <span />
                                        <span />
                                        <span />
                                        <b />
                                    </div>
                                </div>
                            </div>
                            <div className="featured-project-copy">
                                <div className="featured-project-meta">
                                    <span>{"// "}{project.number}</span>
                                    <i aria-hidden="true" />
                                    <span>{project.type}</span>
                                </div>
                                <h3>{project.title}</h3>
                                <p className="featured-project-lead">{project.subtitle}</p>
                                <span className="featured-project-divider" aria-hidden="true" />
                                <p className="featured-project-description">{project.description}</p>
                                <ul className="featured-project-features">
                                    {project.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                                <p className="featured-project-technologies">
                                    {project.technologies.map((technology, index) => (
                                        <span key={technology}>
                                            {index > 0 && <i aria-hidden="true">·</i>}
                                            {technology}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
                <button
                    className="show-more-projects"
                    type="button"
                    onClick={() => navigate("/project")}
                >
                    Show more projects
                    <span aria-hidden="true">→</span>
                </button>
            </section>
        </>
    )
}

export default Home
