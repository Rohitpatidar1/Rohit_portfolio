import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.contactInfo}>
        <span style={styles.email}>rrohitpatidar1234@gmail.com</span>{" "}
      </div>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="#about" style={styles.navLink}>
              About
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#skills" style={styles.navLink}>
              Skills
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#education" style={styles.navLink}>
              Education
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#achievements" style={styles.navLink}>
              Achievements
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#contact" style={styles.navLink}>
              Contact
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#results" style={styles.navLink}>
              Results
            </a>
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
    flexWrap: "wrap",
  },
  contactInfo: {
    marginRight: "20px",
    fontSize: "14px",
  },
  email: {
    fontSize: "16px",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    margin: 0,
    padding: 0,
    flexWrap: "wrap", // Allows items to wrap in small screens
  },
  navItem: {
    margin: "0 10px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
  },

  // Responsive styling using media queries
  "@media (max-width: 768px)": {
    header: {
      flexDirection: "column", // Stack items on smaller screens
      alignItems: "flex-start",
    },
    navList: {
      flexDirection: "column",
      width: "100%", // Take full width on mobile
    },
    navItem: {
      margin: "5px 0", // Space between each item on mobile
    },
    contactInfo: {
      marginBottom: "10px", // Add spacing below email on mobile
    },
  },
};

export default Header;
