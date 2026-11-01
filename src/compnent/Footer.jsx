import "./Footer.css";

const socialLinks = [
  {
    name: "LinkedIn",
    className: "child-1",
    href: "https://www.linkedin.com/in/shubham-padhy-467749355?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    viewBox: "0 0 448 512",
    path: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.26-79.2-48.27 0-55.66 37.7-55.66 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.68-48.3 87.88-48.3 94.01 0 111.36 61.9 111.36 142.3V448z",
  },
  {
    name: "Instagram",
    className: "child-2",
    href: "https://www.instagram.com/__shubuu__1808/",
    viewBox: "0 0 24 24",
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z",
  },
  {
    name: "GitHub",
    className: "child-3",
    href: "https://github.com/shubhampadhy512",
    viewBox: "0 0 24 24",
    path: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.99c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.91.68 1.84V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
  },
];

function Footer() {
  return (
    <footer className="footer-container">
      <hr className="section-divider" />
      <p className="footer-eyebrow">HAVE A PROJECT IN MIND?</p>
      <div className="join">
        <span>Let's work together.</span>
      </div>
      <p className="footer-message">
        Good ideas get better when we build them together.
      </p>
      <div className="connectlink-container">
        <div className="parent">
          {socialLinks.map((social) => (
            <div className={`child ${social.className}`} key={social.name}>
              <a
                className="button"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={social.viewBox}
                  fill="#ffffff"
                  aria-hidden="true"
                >
                  <path d={social.path} />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
      <p className="footer-copyright">
        &copy; 2026 Shubham Padhy. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
