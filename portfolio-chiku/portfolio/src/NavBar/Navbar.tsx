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
                <a href="/work">
                <Link to="/work"> Work </Link> 
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="/model">
                Modeling
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="/Hobbies">
                Hobies
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="/friends">
                Friends
                </a>
            </li>
        </ul>

        
    </nav>
  );
};

export default Navbar;