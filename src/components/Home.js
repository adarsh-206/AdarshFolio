import React from 'react'
import NavBar from './NavBar'
import myphoto from '../myphoto.png'
import developer from '../developer.png'
import education from '../education.png'
import { TypeAnimation } from 'react-type-animation'

function Home() {
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
              'and a frontend web developer 👨‍💻',
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

      <div><h1 className='about-text'>Educational Backgound</h1></div>
      

    </> 
  )
}

export default Home