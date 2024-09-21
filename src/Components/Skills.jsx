// src/components/Skills.js
import React from "react";

function Skills() {
  const skills = [
    { name: "React", percentage: 80 },
    { name: "JavaScript", percentage: 60 },
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 80 },
    { name: "Bootstrap", percentage: 70 },
    { name: "Java", percentage: 65 },
  ];

  return (
    <section id="skills" style={styles.section}>
      <h2>Skills</h2>
      <div style={styles.skillsContainer}>
        <ul style={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} style={styles.skillItem}>
              <span style={styles.skillName}>{skill.name}</span>
              <div style={styles.progressBar}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${skill.percentage}%`,
                  }}
                ></div>
              </div>
              <span style={styles.percentage}>{skill.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "20px",
    textAlign: "left",
    backgroundColor: "#f9f9f9",
  },
  skillsContainer: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "20px",
  },
  skillsList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    width: "100%",
  },
  skillItem: {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  skillName: {
    flexBasis: "20%",
    textAlign: "left",
    fontSize: "18px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  progressBar: {
    flexBasis: "60%",
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",
    overflow: "hidden",
    height: "40px",
    margin: "0 10px",
  },
  progressFill: {
    backgroundColor: "#4caf50",
    height: "100%",
    transition: "width 0.5s",
  },
  percentage: {
    flexBasis: "15%",
    textAlign: "right",
    fontSize: "16px",
  },
};

export default Skills;
