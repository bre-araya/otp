import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RequestOTP from './pages/RequestOTP';
import VerifyOTP from './pages/VerifyOTP';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RequestOTP />} />
        <Route path="/verify" element={<VerifyOTP />} />
      </Routes>

      {/* Simple bottom navigation */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>
          Request OTP
        </Link>
        <Link to="/verify" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>
          Verify OTP
        </Link>
      </div>
    </Router>
  );
}

export default App;
