// src/components/Results.js
import React, { useState } from "react";

// Example images (replace these with actual image paths)
import diplomaResultImage from "../assets/diplomaResult.jpg";
import btechResultImage from "../assets/btechResult.jpg";
import tenthResultImage from "../assets/tenthResult.jpg";

function Results() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // To handle the clicked image for modal

  const diplomaResults = [
    { year: "2023", cgpa: "7.9", image: diplomaResultImage },
  ];

  const btechResults = [{ year: "2024", cgpa: "6.7", image: btechResultImage }];

  const tenthResults = [
    { year: "2020", percentage: "85%", image: tenthResultImage },
  ];

  // Function to render result images and details
  const renderResults = (results) => (
    <ul style={styles.list}>
      {results.map((result, index) => (
        <li key={index} style={styles.listItem}>
          <img
            src={result.image}
            alt={`Result ${index + 1}`}
            style={styles.image}
            onClick={() => setSelectedImage(result.image)} // On click, set the image for modal
          />
          <p>Year: {result.year}</p>
          <p>
            {result.cgpa
              ? `CGPA: ${result.cgpa}`
              : `Percentage: ${result.percentage}`}
          </p>
        </li>
      ))}
    </ul>
  );

  return (
    <section id="results" style={styles.section}>
      <h2>Results</h2>

      {/* Blocks for sections */}
      <div style={styles.blocksContainer}>
        <div style={styles.block} onClick={() => setSelectedSection("diploma")}>
          <h3>Diploma Results</h3>
        </div>

        <div style={styles.block} onClick={() => setSelectedSection("btech")}>
          <h3>B.Tech Results</h3>
        </div>

        <div style={styles.block} onClick={() => setSelectedSection("tenth")}>
          <h3>10th Results</h3>
        </div>
      </div>

      {/* Display selected section's results */}
      <div style={styles.resultsContainer}>
        {selectedSection === "diploma" && renderResults(diplomaResults)}
        {selectedSection === "btech" && renderResults(btechResults)}
        {selectedSection === "tenth" && renderResults(tenthResults)}
      </div>

      {/* Modal for showing enlarged image */}
      {selectedImage && (
        <div style={styles.modal} onClick={() => setSelectedImage(null)}>
          <div style={styles.modalContent}>
            <img
              src={selectedImage}
              alt="Enlarged Result"
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
    textAlign: "center",
  },
  blocksContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  block: {
    width: "30%",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.3s",
  },
  resultsContainer: {
    marginTop: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "20px",
  },
  image: {
    width: "200px",
    height: "150px",
    borderRadius: "10px",
    marginBottom: "10px",
    cursor: "pointer", // Cursor shows pointer to indicate it's clickable
  },
  // Modal styles
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

export default Results;
