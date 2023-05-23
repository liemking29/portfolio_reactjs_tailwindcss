import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <div className="px-16 py-20">
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
      </div>
    </>
  );
};

export default Home;
