import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SigIn from './pages/SigIn';
import Deshboard from './pages/Deshboard';
import Header from './component/Header/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signin" element={<SigIn />} />
        <Route path="/deshboard" element={<Deshboard />} />
      </Routes>
    </Router>
  );
};

export default App;
