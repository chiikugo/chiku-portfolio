import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Chiku Okechukwu
      </a>
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
      <motion.ul className={`nav-links${menuOpen ? ' active' : ''}`}
      animate= {{
        x: [0,-2.5,0],
        
        y: [0,2.5,0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
        }

      }}
      >
        <li>
          <Link to="/work" onClick={() => setMenuOpen(false)}>Work</Link>
        </li>
        <li>
          <Link to="/model" onClick={() => setMenuOpen(false)}>Modeling</Link>
        </li>
        <li>
          <Link to="/Hobbies" onClick={() => setMenuOpen(false)}>Hobbies</Link>
        </li>
        <li>
          <Link to="/friends" onClick={() => setMenuOpen(false)}>Friends</Link>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;