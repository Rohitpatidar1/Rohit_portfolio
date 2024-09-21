// src/Components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Quick Links */}
        <div style={styles.linksSection}>
          <h4>Quick Links</h4>
          <ul style={styles.linksList}>
            <li>
              <a href="#about" style={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" style={styles.link}>
                Skills
              </a>
            </li>
            <li>
              <a href="#education" style={styles.link}>
                Education
              </a>
            </li>
            <li>
              <a href="#achievements" style={styles.link}>
                Achievements
              </a>
            </li>
            <li>
              <a href="#contact" style={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div style={styles.socialMediaSection}>
          <h4>Follow Me</h4>
          <div style={styles.socialIcons}>
            <a
              href="https://www.linkedin.com/in/rohit-patidar-00a05526a/"
              target="_blank"
              rel="noreferrer"
              style={styles.icon}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Rohitpatidar1"
              target="_blank"
              rel="noreferrer"
              style={styles.icon}
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/rohit__patidar5001/"
              target="_blank"
              rel="noreferrer"
              style={styles.icon}
            >
              instagram
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div style={styles.copyrightSection}>
          <p>
            &copy; {new Date().getFullYear()} Rohit Patidar. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "50px",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  linksSection: {
    marginBottom: "20px",
  },
  linksList: {
    listStyleType: "none",
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    marginBottom: "10px",
    display: "block",
  },
  socialMediaSection: {
    marginBottom: "20px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "space-around",
    width: "150px",
    margin: "0 auto",
  },
  icon: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    padding: "5px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  iconHover: {
    backgroundColor: "#555",
  },
  copyrightSection: {
    marginTop: "20px",
  },
};

export default Footer;
