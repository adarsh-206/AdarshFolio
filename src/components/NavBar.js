import React from 'react'
import logo from '../logo.svg';

function NavBar() {
  return (
      <nav className="header">
          <div className='logo-section'>
            <img src={logo} className="App-logo" alt="logo" />
            <a href="/" style={{ textDecoration: 'none' }}>
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
              <li><a href="/resume">Resume</a></li>
              <li><a href="/project">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
       </nav>    
  )
}

export default NavBar