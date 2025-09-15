import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Landing from './pages/landing';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
      <div className='pages'>
        <Routes>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
