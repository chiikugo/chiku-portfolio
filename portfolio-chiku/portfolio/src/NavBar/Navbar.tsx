import { Link } from 'react-router-dom';

import './Navbar.css';



const Navbar: React.FC = () => {
  
  return (
    <nav className="nav">
        <a href="/" className="site-title">
        Chiku Okechukwu
        </a>
        <ul>
            <li>
                <Link to="/work"> Work </Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/model">Modeling</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/Hobbies">Hobbies</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/friends">Friends</Link>
            </li>
        </ul>

        
    </nav>
  );
};

export default Navbar;