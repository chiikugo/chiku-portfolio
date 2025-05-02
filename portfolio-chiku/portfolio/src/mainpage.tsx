
import Navbar from './NavBar/Navbar';
import './mainpage.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './mainpage';
import Work from './pages/work';

function App() {
  return (
   
     
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<Work />} />
    </Routes>
      <main>
        <h1 className="Title">Chiku's Domain!</h1>
        <img 
          className="Chiku" 
          src="/assets/884AF75A-5E7B-4E96-AB00-29FBD4966FDF.png" 
          alt="Portfolio" 
        />
      </main>
      <div>
        <p>
          Hi! My name is Chiku Okechukwu, and I am a Computer-Science Graduate from Temple University! I am an engineer, artist,
          model, and student of the world. I have interned at 3+ companies and I am currently working at (@ The Cigna Group).
        </p>
      </div>
    </div>

  );
}

export default App;