import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GrammarChecker from './pages/GrammarChecker';
import SpellChecker from './pages/SpellChecker';
import Summarizer from './pages/Summarizer';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/spell-checker">Spell Checker</Link>
            </li>
            <li>
              <Link to="/grammar-checker">Grammar Checker</Link>
            </li>
            <li>
              <Link to="/summarize">Summarizer</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<div className="white-text">Select a tool from the menu.</div>} />
          <Route path="/spell-checker" element={<SpellChecker />} />
          <Route path="/grammar-checker" element={<GrammarChecker />} />
       <Route path="/summarize" element={<Summarizer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
