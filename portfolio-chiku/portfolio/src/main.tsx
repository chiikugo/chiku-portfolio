import './index.css'

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './mainpage.tsx'; // or './mainpage'
import Work from './pages/work.tsx';
import Model from './pages/model.tsx';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="/work" element={<Work />} />
      <Route path="/model" element={<Model />}/>
    </Routes>
   
   
  </BrowserRouter>
);