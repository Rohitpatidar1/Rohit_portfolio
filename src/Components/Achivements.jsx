import React, { useState } from "react";
import devtownImage from "../assets/devtown2.jpg";
import CiscoImage from "../assets/Cisco.jpg";

function Achievements() {
  const [selectedImage, setSelectedImage] = useState(null); // To handle clicked image for modal

  const achievements = [
    {
      title: "Cyber Security Certification",
      description:
        "Completed Cyber Security Certification from Cisco Networking.",
      certificateImage: CiscoImage,
    },
    {
      title: "Devtown Certificate",
      description: "Flipkart clone using HTML, CSS & JavaScript from Devtown.",
      certificateImage: devtownImage, // Use the imported image
    },
  ];

  return (
    <section id="achievements" style={styles.section}>
      <h2>Achievements</h2>
      <ul style={styles.list}>
        {achievements.map((achievement, index) => (
          <li key={index} style={styles.listItem}>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
            {achievement.certificateImage && (
              <img
                src={achievement.certificateImage}
                alt={achievement.title}
                style={styles.image}
                onClick={() => setSelectedImage(achievement.certificateImage)} // Open modal on click
              />
            )}
          </li>
        ))}
      </ul>

      {/* Modal for showing enlarged image */}
      {selectedImage && (
        <div style={styles.modal} onClick={() => setSelectedImage(null)}>
          <div style={styles.modalContent}>
            <img
              src={selectedImage}
              alt="Enlarged Certificate"
              style={styles.enlargedImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    padding: "20px",
    textAlign: "left", // Align the text and content to the left
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "20px",
  },
  image: {
    width: "150px",
    borderRadius: "10px",
    cursor: "pointer", // Pointer cursor to indicate it's clickable
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
  },
  enlargedImage: {
    maxWidth: "100%",
    maxHeight: "80vh",
    borderRadius: "10px",
  },
};

export default Achievements;
