import React from "react";

function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Acropolis Institute of Technology & Research, Indore",
      admission_year: "2023",
      graduation_year: "2026",
      cgpa: "6.9",
    },
    {
      degree: "Diploma in Computer Science and Engineering",
      institution: "Shri Vaishnav Polytechnic College",
      admission_year: "2020",
      graduation_year: "2023",
      cgpa: "8.0",
    },
    {
      degree: "10th ",
      institution: "saraswati shishu mandir malhargarh madhya pradesh",
      admission_year: "2019",
      graduation_year: "2020",
      cgpa: "85",
    },
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <h3>{edu.degree}</h3>
            <p>
              {edu.institution} - {edu.admission_year} to {edu.graduation_year}
            </p>
            <p>CGPA: {edu.cgpa}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
