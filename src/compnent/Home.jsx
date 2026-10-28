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
        description: "A responsive portfolio highlighting my work, skills, and experience.",
        type: "WEB DESIGN",
    },
    {
        number: "02",
        title: "Currency Converter",
        description: "A currency conversion tool with live exchange-rate data.",
        type: "REACT APP",
    },
    {
        number: "03",
        title: "Project Showcase",
        description: "An interactive gallery for exploring web projects and experiments.",
        type: "UI DEVELOPMENT",
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
                            <title id="about-illustration-title">A developer working among the stars</title>
                            <defs>
                                <radialGradient id="about-glow">
                                    <stop offset="0%" stopColor="#00e5ff" stopOpacity=".35" />
                                    <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
                                </radialGradient>
                                <linearGradient id="about-laptop" x1="0" x2="1" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#192a4d" />
                                    <stop offset="100%" stopColor="#0b1225" />
                                </linearGradient>
                            </defs>
                            <circle cx="200" cy="200" r="180" fill="url(#about-glow)" />
                            <circle className="about-orbit about-orbit-one" cx="200" cy="200" r="135" />
                            <ellipse className="about-orbit about-orbit-two" cx="200" cy="200" rx="165" ry="78" />
                            <circle className="about-star" cx="88" cy="112" r="3" />
                            <circle className="about-star" cx="306" cy="95" r="2" />
                            <circle className="about-star" cx="318" cy="279" r="3" />
                            <circle className="about-star" cx="91" cy="286" r="2" />
                            <path d="M200 86l5 13 13 5-13 5-5 13-5-13-13-5 13-5z" fill="#a5f3fc" />
                            <rect x="106" y="146" width="188" height="128" rx="14" fill="url(#about-laptop)" stroke="#38bdf8" strokeOpacity=".7" />
                            <rect x="119" y="159" width="162" height="99" rx="7" fill="#080d1a" />
                            <path d="M179 192l-18 15 18 15M221 192l18 15-18 15M210 186l-18 43" fill="none" stroke="#67e8f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
                            <path d="M91 278h218l24 17H67z" fill="#263752" stroke="#38bdf8" strokeOpacity=".55" />
                            <circle cx="200" cy="284" r="3" fill="#67e8f9" />
                            <circle cx="305" cy="170" r="17" fill="#12203b" stroke="#a78bfa" strokeWidth="2" />
                            <path d="M305 160v20M295 170h20" stroke="#c4b5fd" strokeLinecap="round" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="my-intro-text">
                        <p className="about-kicker">A LITTLE ABOUT ME</p>
                        <h2>Curious by nature.<br /><span>Developer by choice.</span></h2>
                        <p>
                            I’m <strong>Shubham Padhy</strong>, a motivated software developer with a strong interest in building thoughtful web experiences.
                            I enjoy turning ideas into responsive, easy-to-use applications with React and Java.
                        </p>
                        <p>
                            I care about clean code, useful details, and learning something new with every project.
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
                                <span className="featured-project-orbit" aria-hidden="true" />
                                <span className="featured-project-type">{project.type}</span>
                            </div>
                            <div className="featured-project-copy">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
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
