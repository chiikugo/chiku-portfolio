
import Navbar from './NavBar/Navbar';
import { motion } from 'framer-motion';

import './mainpage.css';

function App() {
  
  

  
  return (
   
     <div>
      <Navbar/>
    <div className="skeleton">
      
      
      <main className="body">
        
        <img 
          className="Chiku" 
          src="/assets/884AF75A-5E7B-4E96-AB00-29FBD4966FDF.png" 
          alt="Portfolio" 
        />
        <a className="name">
          Chiku Okechukwu
        </a>
        <div>
        <p>
          Hi! My name is Chiku Okechukwu, and I am a Computer-Science Graduate from Temple University! I am an engineer, artist,
          model, and student of the world. I have interned at 3+ companies and I am currently working at (@ The Cigna Group).
        </p>
      </div>
      </main>
      <h1>
        About
      </h1>
      <motion.div className="about"
      initial= {{
        opacity :  0
      }}
      
      whileInView={{
        opacity : 1,
        scale: 1.05,
        transition : {
          duration : 1.25
        }

      }}

      viewport={{
        once: true,
        amount: 0.5
      }}
      >
        

        <img className="chiku-little"
        src="/assets/sd 082.png"/>
         <p>
      Born in Upper Darby, PA to Nigerian parents, I’ve always been fascinated by technology and software. Whether it was playing RollerCoaster Tycoon 2 or experimenting with game creation on Roblox, I was drawn to building and creating. 
      Software engineering was always the path I wanted to follow~I just didn’t know what it was called at the time...
      </p>
     
      </motion.div>
     
    </div>
    </div>
  );
}

export default App;