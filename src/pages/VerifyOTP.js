import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const VerifyOTP = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleVerify = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/verify-otp', { email, otp });
      setMessage(res.data.message || 'OTP verified successfully!');
      setIsSuccess(true);
    } catch (error) {
      setMessage('OTP verification failed.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="container">
      <h2>Verify OTP</h2>
      <input
        type="email"
        placeholder="Enter your email again"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="otp-container">
        {Array.from({ length: 6 }).map((_, i) => (
          <input
            key={i}
            className="otp-box"
            type="text"
            maxLength="1"
            value={otp[i] || ''}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, '');
              const newOtp = otp.split('');
              newOtp[i] = value;
              setOtp(newOtp.join(''));
            }}
          />
        ))}
      </div>
      <button onClick={handleVerify}>Verify OTP</button>
      {message && <p className={isSuccess ? 'success' : 'error'}>{message}</p>}
    </div>
  );
};

export default VerifyOTP;
