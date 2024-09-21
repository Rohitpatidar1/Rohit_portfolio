import React from "react";
import RohitImage from "../assets/Rohit.jpg"; // सही पथ की जांच करें

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
    height: "50vh", // Full viewport height
    textAlign: "center",
    // background: "linear-gradient(135deg, #6a11cb, #2575fc)", // 3D ग्रेडिएंट रंग
    color: "#fff", // टेक्स्ट का रंग
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // इमेज पर शैडो
  },
  heading: {
    fontSize: "2.5rem",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // टेक्स्ट पर शैडो
    color: "black",
  },
  paragraph: {
    color: "black",
    fontSize: "1.2rem",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)", // टेक्स्ट पर शैडो
  },
};

export default Intro;
