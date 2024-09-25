import React from "react";
import RohitImage from "../assets/Rohit.jpg";

function Intro() {
  return (
    <section id="intro" style={styles.section}>
      <div style={styles.container}>
        <img src={RohitImage} alt="Your Name" style={styles.image} />
        <h1 style={styles.heading}>Hello, I’m Rohit Patidar</h1>
        <p style={styles.paragraph}>
          I am a passionate web developer with experience in React.js and modern
          web technologies.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50vh",
    textAlign: "center",
    color: "#fff",
    padding: "20px",
    boxSizing: "border-box",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1200px",
    width: "100%",
    padding: "20px",
  },
  image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "2rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    color: "black",
  },
  paragraph: {
    color: "black",
    fontSize: "1.1rem",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
  },

  // Media queries for mobile devices
  "@media (max-width: 600px)": {
    image: {
      width: "100px", // Chhoti screen ke liye chhota image size
      height: "100px",
    },
    heading: {
      fontSize: "1.5rem", // Chhoti screen ke liye heading chhoti karna
    },
    paragraph: {
      fontSize: "1rem", // Chhoti screen ke liye paragraph ka size chhota karna
    },
  },
  // Tablet aur large screen ke liye changes
  "@media (min-width: 768px)": {
    section: {
      minHeight: "70vh",
    },
    image: {
      width: "180px",
      height: "180px",
    },
    heading: {
      fontSize: "2.5rem",
    },
    paragraph: {
      fontSize: "1.2rem",
    },
  },
  "@media (min-width: 1024px)": {
    section: {
      minHeight: "90vh",
    },
    image: {
      width: "220px",
      height: "220px",
    },
    heading: {
      fontSize: "3rem",
    },
    paragraph: {
      fontSize: "1.5rem",
    },
  },
};

export default Intro;
