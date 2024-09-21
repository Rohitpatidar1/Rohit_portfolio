import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Achievements from "./Components/Achivements";
import Results from "./Components/Results";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Education />
      <Achievements />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
