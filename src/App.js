import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import HowToHelp from "./components/HowToHelp";
import Contact from "./components/Contact";
import BackToTopButton from "./components/BackToTopButton";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <HowToHelp />
      <Contact />
      <BackToTopButton />
    </div>
  );
}

export default App;
