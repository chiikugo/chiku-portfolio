// App.tsx (route definitions here)
import { Routes, Route } from 'react-router-dom';
import HomePage from './mainpage';
import Work from './pages/work';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<Work />} />
    </Routes>
  );
}
export default App;