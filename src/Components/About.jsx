// src/components/About.js
import React from "react";

function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.title}>About Me</h2>
      <p style={styles.paragraph}>
        I am currently studying in college, pursuing my degree in Computer
        Science and Engineering. I am passionate about web development and have
        hands-on experience in React.js, along with a solid understanding of
        JavaScript, HTML, and CSS.
      </p>
      <p style={styles.paragraph}>
        I enjoy building interactive and dynamic web applications. My goal is to
        create solutions that are not only functional but also user-friendly and
        visually appealing. Right now, I am working on a project that focuses on
        providing real-time information about open hospitals and their
        facilities, particularly for emergencies.
      </p>
      <p style={styles.paragraph}>
        In my free time, I love exploring new technologies, contributing to
        open-source projects, and enhancing my skills through online courses. I
        believe in continuous learning and am always eager to take on new
        challenges.
      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: "20px",
    textAlign: "left",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#333",
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "15px",
    color: "#555",
  },
};

export default About;
