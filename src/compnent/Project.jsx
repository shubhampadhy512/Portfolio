import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "./Poject.css";

const DeveloperLogo = `${process.env.PUBLIC_URL}/developerLogo.png`;

const projects = [
    {
        number: "01",
        title: "Portfolio Website",
        category: "WEB DEVELOPMENT",
        subtitle: "A personal space for projects, skills, and connection.",
        description:
            "A responsive personal portfolio built to introduce my work, share my skills, and make it easy to get in touch.",
        features: ["Responsive portfolio layout", "Project and skills showcase", "Direct contact links"],
        technologies: ["React", "CSS", "React Router"],
        url: "https://github.com/shubhampadhy512",
        visual: "portfolio",
        icon: (
            <svg viewBox="0 0 64 64" aria-hidden="true">
                <rect x="9" y="12" width="46" height="38" rx="5" />
                <path d="M9 22h46M18 17h1m6 0h1m6 0h1M23 32l-6 6 6 6m18-12 6 6-6 6m-7-14-5 16" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Currency Converter",
        category: "REACT APPLICATION",
        subtitle: "Simple currency comparisons with current exchange rates.",
        description:
            "A currency conversion interface that fetches exchange rates and lets users compare currencies with a simple workflow.",
        features: ["Choose source and target currencies", "Convert entered amounts", "Display the converted result"],
        technologies: ["React", "JavaScript", "REST API"],
        url: "https://github.com/shubhampadhy512",
        visual: "currency",
        icon: (
            <svg viewBox="0 0 64 64" aria-hidden="true">
                <circle cx="32" cy="32" r="22" />
                <path d="M40 23c-2-2-5-3-8-3-5 0-8 3-8 7s3 6 8 6 8 2 8 6-3 7-8 7c-3 0-7-1-9-4m9-26v30" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Unity Game Development",
        category: "GAME DEVELOPMENT",
        subtitle: "Interactive gameplay experiments built with Unity.",
        description:
            "Exploring interactive gameplay and real-time experiences with C# and Unity.",
        features: ["Interactive gameplay concepts", "C# scripting experiments", "Real-time Unity development"],
        technologies: ["C#", "Unity", "Game development"],
        url: "https://github.com/shubhampadhy512",
        visual: "game",
        icon: (
            <svg viewBox="0 0 64 64" aria-hidden="true">
                <path d="M19 22h26c6 0 10 5 11 12l2 12c1 6-5 9-10 5l-8-7H24l-8 7c-5 4-11 1-10-5l2-12c1-7 5-12 11-12z" />
                <path d="M21 30v12m-6-6h12m18-3h.1m5 7h.1" />
            </svg>
        ),
    },
];

function Project() {
    const cursorRef = useRef(null);
    const pointerRef = useRef({ x: -1, y: -1 });
    const [cursorVisible, setCursorVisible] = useState(false);

    // The browser doesn't always fire "pointerleave" when the page scrolls and a
    // card moves out from under a still mouse, which left the spinner stuck.
    // So on scroll (or when the mouse leaves the page) re-check what is under it.
    useEffect(() => {
        const syncCursor = () => {
            const { x, y } = pointerRef.current;
            const target = document.elementFromPoint(x, y);
            if (!target || !target.closest(".project-card")) {
                setCursorVisible(false);
            }
        };
        const hideCursor = () => setCursorVisible(false);
        const root = document.documentElement;

        window.addEventListener("scroll", syncCursor, { passive: true, capture: true });
        window.addEventListener("blur", hideCursor);
        root.addEventListener("mouseleave", hideCursor);

        return () => {
            window.removeEventListener("scroll", syncCursor, { capture: true });
            window.removeEventListener("blur", hideCursor);
            root.removeEventListener("mouseleave", hideCursor);
        };
    }, []);

    // Follow the mouse while it is over a project card
    const moveCursor = (event) => {
        if (event.pointerType === "touch") return;
        const cursor = cursorRef.current;
        if (!cursor) return;
        cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
        cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
        pointerRef.current = { x: event.clientX, y: event.clientY };
        setCursorVisible(true);
    };

    const hideCursor = () => setCursorVisible(false);

    return (
        <main className="projects-page">
            <header className="projects-heading">
                <div className="projects-heading-copy">
                    <p className="projects-eyebrow">SELECTED WORK</p>
                    <h1>Projects built with <span>curiosity.</span></h1>
                    <p className="projects-intro">
                        A selection of things I’ve built and technologies I enjoy working with.
                    </p>
                </div>
                <div className="projects-heading-logo-wrap">
                    <img
                        className="projects-heading-logo"
                        src={DeveloperLogo}
                        alt="Shubham Padhy developer logo"
                    />
                </div>
            </header>

            <section className="projects-grid" aria-label="Project portfolio">
                {projects.map((project) => (
                    <article
                        className="project-card"
                        key={project.number}
                        onPointerEnter={moveCursor}
                        onPointerMove={moveCursor}
                        onPointerLeave={hideCursor}
                    >
                        <div className={`project-visual project-visual-${project.visual}`}>
                            <span className="project-index">{project.number}</span>
                            <span className="project-category">{project.category}</span>
                            <div className="project-window project-window-main" aria-hidden="true">
                                <div className="project-window-bar">
                                    <span />
                                    <span />
                                    <span />
                                    <i>{project.visual === "portfolio" ? "shubham.dev" : project.title}</i>
                                </div>
                                <div className="project-window-content">
                                    <span className="project-window-kicker">{project.category}</span>
                                    <div className="project-window-mark">{project.icon}</div>
                                    <strong>{project.title}</strong>
                                    {project.visual === "portfolio" && (
                                        <div className="project-scene project-scene-portfolio">
                                            <span className="project-scene-nav" />
                                            <span className="project-scene-hero" />
                                            <span className="project-scene-copy" />
                                            <div><i /><i /><i /></div>
                                        </div>
                                    )}
                                    {project.visual === "currency" && (
                                        <div className="project-scene project-scene-currency">
                                            <span><b>$</b><i>USD</i><em>1.00</em></span>
                                            <strong aria-hidden="true">↓</strong>
                                            <span><b>€</b><i>EUR</i><em>0.92</em></span>
                                        </div>
                                    )}
                                    {project.visual === "game" && (
                                        <div className="project-scene project-scene-game">
                                            <span className="project-scene-stars" />
                                            <span className="project-scene-moon" />
                                            <span className="project-scene-hill project-scene-hill-back" />
                                            <span className="project-scene-hill project-scene-hill-front" />
                                            <i className="project-scene-player" />
                                            <span className="project-scene-hud">LVL 01 <b>♥ ♥ ♥</b></span>
                                        </div>
                                    )}
                                    <span className="project-window-rule" />
                                    <span className="project-window-line" />
                                    <span className="project-window-line short" />
                                    <div className="project-window-tiles">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                </div>
                            </div>
                            <div className="project-window project-window-overlay" aria-hidden="true">
                                <div className="project-window-bar">
                                    <span />
                                    <span />
                                    <span />
                                    <i>project preview</i>
                                </div>
                                <div className="project-window-overlay-content">
                                    <span />
                                    <span />
                                    <span />
                                    <b />
                                </div>
                            </div>
                            <span className="project-touch-badge" aria-hidden="true">↗</span>
                        </div>
                        <div className="project-card-content">
                            <div className="project-card-meta">
                                <span>{"// "}{project.number}</span>
                                <i aria-hidden="true" />
                                <span>{project.category}</span>
                            </div>
                            <h2>{project.title}</h2>
                            <p className="project-card-subtitle">{project.subtitle}</p>
                            <span className="project-card-divider" aria-hidden="true" />
                            <p className="project-card-description">{project.description}</p>
                            <ul className="project-feature-list" aria-label={`${project.title} highlights`}>
                                {project.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                            <ul className="project-tech-list" aria-label={`${project.title} technologies`}>
                                {project.technologies.map((technology) => (
                                    <li key={technology}>{technology}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Whole card is the link (mouse, touch and keyboard) */}
                        <a
                            className="project-card-link"
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                        />
                    </article>
                ))}
            </section>

            <section className="projects-contact">
                <p>Have an idea in mind?</p>
                <Link to="/contact">Let’s build it together <span aria-hidden="true">→</span></Link>
            </section>

            {/* One spinner cursor for the whole page, rendered on <body> so no
                parent transform/overflow can clip or offset it */}
            {createPortal(
                <div
                    ref={cursorRef}
                    className={`project-cursor ${cursorVisible ? "is-visible" : ""}`}
                    aria-hidden="true"
                >
                    <svg viewBox="0 0 100 100">
                        <defs>
                            <path
                                id="project-cursor-path"
                                d="M50 50m-35 0a35 35 0 1 1 70 0a35 35 0 1 1-70 0"
                            />
                        </defs>
                        <text>
                            <textPath href="#project-cursor-path" textLength="216" lengthAdjust="spacing">
                                VIEW PROJECT • VIEW PROJECT •
                            </textPath>
                        </text>
                    </svg>
                    <span className="project-cursor-arrow">↗</span>
                </div>,
                document.body
            )}
        </main>
    );
}

export default Project;