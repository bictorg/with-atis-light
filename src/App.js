import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import TermsPage from './pages/Terms.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
}

export default App;
