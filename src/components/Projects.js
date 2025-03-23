import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* Meme Generator Project */}
      <div className="project">
        <h3>Meme Generator</h3>
        <p>A fun React-based meme generator where users can create and download custom memes.</p>
        <a 
          href="https://strong-mousse-2717c7.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-button"
        >
          Visit Meme Generator
        </a>
      </div>

      {/* West Atlantic Tech Project */}
      <div className="project">
        <h3>West Atlantic Tech</h3>
        <p>A professional website showcasing the IT and software solutions provided by West Atlantic Tech.</p>
        <a 
          href="https://westatlantictech.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="view-button"
        >
          Visit West Atlantic Tech
        </a>
      </div>
      
    </section>
  );
};

export default Projects;
