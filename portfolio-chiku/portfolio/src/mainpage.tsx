
import Navbar from './NavBar/Navbar';
import { motion } from 'framer-motion';

import './mainpage.css';

function App() {
  
  

  
  return (
   
     <div>
      <Navbar/>
    <div className="skeleton">
      
      
      <main className="body">
       <div className="image-stack">
        <img 
          className="Chiku" 
          src="/assets/884AF75A-5E7B-4E96-AB00-29FBD4966FDF.png" 
          alt="Portfolio" 
        />
        <img
        className="Chiku-underneath"
        src="/assets/IMG_7411.png"
        />
        <img
        className="Chiku-underneath-two"
        src="/assets/IMG_5109.png"
        />
        </div> 
        <motion.div 
          className="relative group cursor-pointer"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 } 
          }}
        >
          <motion.div
            className="flex flex-col"
            initial="hidden"
            whileHover="visible"
            variants={{
              hidden: { opacity: 1 },
              visible: { 
                opacity: 1,
                transition: { 
                  delayChildren: 0.2,
                  staggerChildren: 0.1 
                }
              }
            }}
          >
            <motion.a 
              className="name text-2xl font-bold text-white hover:text-custom-green transition-colors duration-300"
              variants={{
                hidden: { color: '#ffffff' },
                visible: { color: '#57886c' }
              }}
            >
              Chiku Okechukwu
            </motion.a>
            <motion.div 
              className="mt-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0, color: '#57886c', fontSize: '25px', gap: '5px' },
                
              }}
            >
              <div className="text-lg text-custom-text space-y-2">
                <p className="font-semibold">Also known as:</p>
                <ul className="text-2xl font-bold list-disc pl-5 text-custom-text w-full md:w-[45%] space-y-4">
                  <li>Chi</li>
                  <li>Cheeks</li>
                  <li>Nnam</li>
                  <li>Chiikugo</li>
                  <li>TyphoonDragoon322</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
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
        

        <div className="image-container">
          <img 
            className="chiku-little" 
            src="/assets/sd 082.png"
          />
          <div className="hover-circle hover-circle-left"></div>
          <div className="hover-circle hover-circle-right"></div>
        </div>
        <p className="about-bio">
      Born in Upper Darby, PA to Nigerian parents, I’ve always been fascinated by technology and software. Whether it was playing RollerCoaster Tycoon 2, or experimenting with game creation on Roblox, I was drawn to having fun and creating. 
      Software engineering was always the path I wanted to follow~I just didn’t know what it was called at the time...
      </p>
     
      </motion.div>
     
    </div>
    <h1>
      Work Experience
    </h1>
    <div className="workwork">
      <div className="work-images">
        <motion.img 
          className="ibm" 
          src="/assets/jobs/IBM Logo (1).png"
          animate={{ 
            y: [0, -15, 0], 
            transition: { 
              duration: 2, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            } 
          }}
        />
        <motion.img 
          className="trinity" 
          src="/assets/jobs/Trinity Photopea.png"
          animate={{ 
            y: [0, -20, 0], 
            transition: { 
              duration: 2, 
              repeat: Infinity, 
              ease: 'easeInOut',
              delay: 0.5 
            } 
          }}
        />
        <motion.img 
          className="csaa" 
          src="/assets/jobs/CSAA (1).png"
          animate={{ 
            y: [0, -20, 0], 
            transition: { 
              duration: 2, 
              repeat: Infinity, 
              ease: 'easeInOut',
              delay: 1 
            } 
          }}
        />
      </div>
    <motion.div 
      className="work-bio"
      animate={{
        x:[0,-5,0],
        transition:{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }
      }}
    >
      <p>
        I've had the opportunity to work in several roles throughout my career, each contributing to my growth as a developer:
      </p>
      <br/>
      <p>
        • IBM Good Tech Scholar: This was my first exposure to front-end development. I gained hands-on experience working in Agile teams, learning how to build applications collaboratively and effectively.
      </p>
      <br/>
      <p>
        • Trinity IT Services: Here, I delved into back-end development, gaining experience with technologies like Docker, AWS, and Java. I was encouraged to deepen my skills through courses and personal training, and I presented findings from my own project work throughout the internship.
      </p>
      <br/>
      <p>
        • CSAA Insurance Group: My final internship focused on data engineering. I worked with tools such as Snowflake, Python, and SQL to build data pipelines and contribute to startup ideas for internal competitions. This experience deepened my understanding of data architecture and reinforced my passion for working with data-driven solutions.
      </p>
      
    </motion.div>
    </div>
    
    </div>
  );
}

export default App;