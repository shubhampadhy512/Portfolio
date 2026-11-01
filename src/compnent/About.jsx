import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";

const AboutVideo = `${process.env.PUBLIC_URL}/large%20(1).mp4`;
const GITHUB_USERNAME = "shubhampadhy512";
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

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

function getCalendarDays(contributions) {
  const firstDay = new Date(`${contributions[0].date}T00:00:00Z`).getUTCDay();
  const days = [...Array(firstDay).fill(null), ...contributions];
  const trailingDays = (7 - (days.length % 7)) % 7;

  return [...days, ...Array(trailingDays).fill(null)];
}

function GitHubContributions() {
  const [contributionData, setContributionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadContributions() {
      setIsLoading(true);
      setHasError(false);

      try {
        const response = await fetch(CONTRIBUTIONS_API, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Contribution API returned ${response.status}`);
        }

        const data = await response.json();
        const hasValidData =
          typeof data.total?.lastYear === "number" &&
          Array.isArray(data.contributions) &&
          data.contributions.length > 0 &&
          data.contributions.every(
            (contribution) =>
              /^\d{4}-\d{2}-\d{2}$/.test(contribution.date) &&
              Number.isFinite(contribution.count) &&
              Number.isFinite(contribution.level)
          );

        if (!hasValidData) {
          throw new Error("Contribution API returned unexpected data");
        }

        setContributionData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setHasError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadContributions();
    return () => controller.abort();
  }, [retryCount]);

  const calendarDays = contributionData
    ? getCalendarDays(contributionData.contributions)
    : [];

  return (
    <section
      className="about-page-contributions"
      aria-labelledby="about-contributions-title"
    >
      <div className="about-page-contributions-heading">
        <div>
          <p className="about-page-eyebrow">ON GITHUB</p>
          <h2 id="about-contributions-title">Contribution activity</h2>
        </div>
        {contributionData && (
          <p className="about-page-contribution-total">
            <strong>{contributionData.total.lastYear.toLocaleString()}</strong>{" "}
            contributions in the last year
          </p>
        )}
      </div>

      {isLoading && (
        <p className="about-page-contribution-message" role="status">
          Loading GitHub contributions…
        </p>
      )}

      {hasError && (
        <div className="about-page-contribution-message" role="alert">
          <p>GitHub contributions couldn’t be loaded right now.</p>
          <button
            className="about-page-contribution-retry"
            type="button"
            onClick={() => setRetryCount((count) => count + 1)}
          >
            Try again
          </button>
        </div>
      )}

      {contributionData && (
        <>
          <div
            className="about-page-contribution-scroll"
            role="img"
            aria-label={`Contribution calendar for the last year: ${contributionData.total.lastYear} contributions`}
          >
            <div className="about-page-contribution-grid">
              {calendarDays.map((contribution, index) => {
                if (!contribution) {
                  return (
                    <span
                      className="about-page-contribution-day is-empty"
                      key={`empty-${index}`}
                      aria-hidden="true"
                    />
                  );
                }

                const date = new Date(`${contribution.date}T00:00:00Z`);
                const formattedDate = date.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                });

                return (
                  <span
                    className="about-page-contribution-day"
                    data-level={Math.min(4, Math.max(0, contribution.level))}
                    key={contribution.date}
                    title={`${contribution.count} contributions on ${formattedDate}`}
                    aria-hidden="true"
                  />
                );
              })}
            </div>
          </div>
          <div className="about-page-contribution-footer">
            <span>Less</span>
            <span className="about-page-contribution-legend" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((level) => (
                <span
                  className="about-page-contribution-day"
                  data-level={level}
                  key={level}
                />
              ))}
            </span>
            <span>More</span>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </>
      )}
    </section>
  );
}

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
          <video
            className="about-page-portrait"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Shubham Padhy"
          >
            <source src={AboutVideo} type="video/mp4" />
          </video>
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
      <GitHubContributions />
    </main>
  );
}

export default About;