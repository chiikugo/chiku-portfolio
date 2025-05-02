import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './mainpage.tsx'; // or './mainpage'
import Work from './pages/work.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="/work" element={<Work />} />
    </Routes>
   
   
  </BrowserRouter>
);