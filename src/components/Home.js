import React from 'react'
import NavBar from './NavBar'
import myphoto from '../myphoto.png'
import developer from '../developer.png'
import { TypeAnimation } from 'react-type-animation'
import htmlImage from '../images/html.png'
import cssImage from '../images/css.png'
import javascriptImage from '../images/js.png'
import reactImage from '../images/react.png'
import cppImage from '../images/c++.png'
import dsImage from '../images/dsa.png'
import nodeImage from '../images/node.png'
import database from '../images/database.png'
import Footer from './Footer'


const skills = [
  { name: 'HTML', image: htmlImage },
  { name: 'CSS', image: cssImage },
  { name: 'JavaScript', image: javascriptImage },
  { name: 'ReactJS', image: reactImage },
  { name: 'NodeJS', image: nodeImage },
  { name: 'C/C++', image: cppImage },
  { name: 'Data Structures', image: dsImage },
  { name: 'MongoDB & MySQL', image: database }
];

const Card = ({ skill }) => {
  return (
    <div className="card">
      <img src={skill.image} alt={skill.name} className="card-image" />
      <h3>{skill.name}</h3>
    </div>
  );
};

function Home() {
  const styles = [
    { '--i': 1 },
    { '--i': 3 },
    { '--i': 16 },
    { '--i': 5 },
    { '--i': 13 },
    { '--i': 6 },
    { '--i': 20 },
    { '--i': 6 },
    { '--i': 7 },
    { '--i': 10 },
    { '--i': 8 },
    { '--i': 17 },
    { '--i': 11 },
    { '--i': 12 },
    { '--i': 14 },
    { '--i': 2 },
    { '--i': 9 },
    { '--i': 15 },
    { '--i': 4 },
    { '--i': 19 }
  ];
  const redirectToVeggieFreshGitHub = () => {
    window.location.href = 'https://github.com';
  };
  const redirectToVeggieFresh = () => {
    window.location.href = 'https://github.com';
  };
  const redirectToFilesMobGitHub = () => {
    window.location.href = 'https://github.com';
  };
  const redirectToFilesMob = () => {
    window.location.href = 'https://github.com';
  };
  const redirectToNotesAddaGitHub = () => {
    window.location.href = 'https://github.com';
  };
  const redirectToNotesAdda = () => {
    window.location.href = 'https://github.com';
  };
  return (
    <>
      <NavBar />
      <div className='home-content'>
        <div className='left-column'>
          <img src={myphoto} className="myphoto" alt="myphoto" />
        </div>
        <div className='right-column'>
            <h1 style={{fontWeight: '500'}}>Hey! <span className='hand-emoji-container'><span className='hand-emoji'>👋</span></span></h1>
            <h1 style={{fontWeight: '500'}}>I am <span className='gradient-text'>Adarsh Dhote</span></h1>
            <TypeAnimation
            sequence={[
              'A tech enthusiast',
              1000,
              'a frontend web developer 👨‍💻',
            ]}
            wrapper="span"
            cursor={false}
            repeat="no"
            style={{ fontSize: '1.3em', display: 'inline-block', letterSpacing: '1px'}}
          />
          <p className='desc-text'>
          I specialize in front-end web development and design, creating outstanding digital experiences. As a community enthusiast, I'm passionate about building responsive web applications while continuously learning new technologies.
          </p>
        </div>
      </div>
      
      <div><h1 className='about-text'>About Me</h1></div>
      <div className='about-content'>
        <div className='about-desc'>
          <p>I am a skilled web developer proficient in HTML, CSS, JavaScript, and React. With a solid foundation in C/C++ and expertise in data structures and algorithms, I thrive in solving complex problems. Passionate about learning, I embrace new opportunities and deliver captivating user experiences.</p>
          <p>Beyond coding, I am a passionate learner who constantly seeks growth and improvement. When I'm not immersed in technology, you can find me on the table tennis court, where I channel my competitive spirit. I am ready to tackle exciting challenges and make a meaningful impact with my diverse skill set.</p>
        </div>
        <div>
           <img src={developer} className="aboutme" alt="About Me" />
        </div>
      </div>

      <div><h1 className='about-text' id='skills'>Skills</h1></div>
      <div className="skill-container">
      {skills.map((skill, index) => (
        <Card key={index} skill={skill} />
      ))}
    </div>

    <div><h1 className='about-text' id='projects'>Projects</h1></div>
    <div>
    <div class="project-container">
		<div class="box">
			<div class="content">
				<h3>VeggieFresh</h3>
				<p>Developed a real-time vegetable delivery app for users to order fresh produce. Admins can track order status and payments. Implemented Socket.io for real-time communication between client and server, ensuring instant updates for users.</p>
			  <p>Technologies Used :- MERN Stack, Socket.io</p>
        <div className="button-container">
          <button className="custom-button-yellow" onClick={redirectToVeggieFreshGitHub}>View Code</button>
          <button className="custom-button-yellow" onClick={redirectToVeggieFresh}>Demo</button>
        </div>
      </div>
		</div>
		<div class="box">
			<div class="content">
				<h3>FilesMob</h3>
				<p>A file sharing app with full stack capabilities. Users can upload files, share them via links or QR codes. Built APIs using Node.js (Multer) for file uploads. Implemented nodemailer for email sending and scheduled a script to delete old files automatically.</p>
        <p>Technologies Used :- NodeJS ExpressJS MongoDB</p>	
        <div className="button-container">
          <button className="custom-button-pink" onClick={redirectToFilesMobGitHub}>View Code</button>
          <button className="custom-button-pink" onClick={redirectToFilesMob}>Demo</button>
        </div>		
      </div>
		</div>
		<div class="box">
			<div class="content">
				<h3>NotesAdda</h3>
				<p>Web-based system for sharing notes among students, teachers, and admins. Features include CRUD operations, multi-user access, note download/upload, and secure registration/login.</p>
			  <p>Technologies Used :- HTML CSS JS PHP</p>
        <div className="button-container">
          <button className="custom-button-blue" onClick={redirectToNotesAddaGitHub}>View Code</button>
          <button className="custom-button-blue" onClick={redirectToNotesAdda}>Demo</button>
        </div>
      </div>
		</div>
	</div>
	<svg>
      <filter id="wavy">
        <feTurbulence x="0" y="0" id="turbulence" baseFrequency="0.01" numOctaves="5" seed="2">
          <animate attributeName="baseFrequency" dur="60s" values="0.01;0.05;0.01" repeatCount="indefinite" />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
  	</svg>
    </div>

    <div id='contact'><h1 className='about-text'>Get in Touch</h1></div>
    <p style={{textAlign: 'center', letterSpacing: '0.5px', paddingBottom: '20px'}}>Let's have a cup of coffee and take a moment to savor the simple joys of life.</p>
    <div class="contact-container">
    <div class="column image-column">
      <div className='container-contact'>
        <div className='plate'></div>
        <div className='cup'>
          <div className='top'>
            <div className='vapour'>
            {styles.map((style, index) => (
              <span key={index} style={style}></span>
            ))}
            </div>
            <div className='circle'>
              <div className='tea'>
              </div>
            </div>
          </div>
          <div className='handle'></div>
        </div>
      </div>
    </div>
    <div class="column form-column">
    <div className="form-container">
      <form>
        <div className="form-group">
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="phone" id="phone" name="phone" placeholder="Mobile Number" required />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" placeholder="Message" required></textarea>
        </div>
        <div className="form-group" style={{textAlign: 'center'}}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  </div>
  <Footer/>
    </> 
  )
}

export default Home