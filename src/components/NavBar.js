import React from 'react'
import logo from '../logo.svg';

function NavBar() {
  const scrollToSkills = (event) => {
    event.preventDefault();
    const skillsElement = document.getElementById('skills');
    skillsElement.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProject = (event) => {
    event.preventDefault();
    const skillsElement = document.getElementById('projects');
    skillsElement.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = (event) => {
    event.preventDefault();
    const skillsElement = document.getElementById('contact');
    skillsElement.scrollIntoView({ behavior: 'smooth' });
  };
  const handleDownload = (e) => {
    e.preventDefault();
    const pdfUrl = 'https://drive.google.com/file/d/1VHG6D8lk8256rPQne5cuvDqvOxbn7mLs/view?usp=sharing';
    window.open(pdfUrl, '_blank');
  };

  return (
      <nav className="header">
          <div className='logo-section'>
            <img src={logo} className="App-logo" alt="logo" />
            <a href="/adarshfolio" style={{ textDecoration: 'none' }}>
            <h2 class="logo-text">
              <span>A</span>
              <span>d</span>
              <span>a</span>
              <span>r</span>
              <span>s</span>
              <span>h</span>
              <span>F</span>
              <span>o</span>
              <span>l</span>
              <span>i</span>
              <span>o</span>
            </h2>
          </a>
          </div>
          <div className="navbar">
            <ul>
              <li><a href="#skills" onClick={scrollToSkills}>Skills</a></li>
              <li><a href="#projects" onClick={scrollToProject}>Projects</a></li>
              <li><a href="#contact" onClick={scrollToContact}>Contact</a></li>
            </ul>
            <a className='gradient-text1' href="#" onClick={handleDownload}>Resume</a>
          </div>
       </nav>    
  )
}

export default NavBar