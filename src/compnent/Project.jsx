import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import "./Poject.css";

const projects = [
    {
        number: "01",
        title: "Portfolio Website",
        category: "WEB DEVELOPMENT",
        description:
            "A responsive personal portfolio built to introduce my work, share my skills, and make it easy to get in touch.",
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
        description:
            "A currency conversion interface that fetches exchange rates and lets users compare currencies with a simple workflow.",
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
        description:
            "Exploring interactive gameplay and real-time experiences with C# and Unity.",
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
                <p className="projects-eyebrow">SELECTED WORK</p>
                <h1>Projects built with <span>curiosity.</span></h1>
                <p className="projects-intro">
                    A selection of things I’ve built and technologies I enjoy working with.
                </p>
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
                            <div className="project-visual-orbit" aria-hidden="true" />
                            <div className="project-icon">{project.icon}</div>
                            <span className="project-category">{project.category}</span>
                            <span className="project-touch-badge" aria-hidden="true">↗</span>
                        </div>
                        <div className="project-card-content">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
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