import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.contactInfo}>
        <span style={styles.email}>rrohitpatidar1234@gmail.com</span>{" "}
      </div>
      <nav>
        <ul style={styles.navList}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#results">Results</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    zIndex: 1000,
  },
  contactInfo: {
    marginRight: "20px",
  },
  email: {
    fontSize: "16px",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    color: "#fff", // White text for links
    textDecoration: "none",
  },
};

export default Header;
