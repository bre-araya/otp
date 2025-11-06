import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const RequestOTP = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSendOTP = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/send-otp', { email });
      setMessage(res.data.message || 'OTP sent successfully!');
      setIsSuccess(true);
    } catch (error) {
      setMessage('Failed to send OTP. Try again!');
      setIsSuccess(false);
    }
  };

  return (
    <div className="container">
      <h2>Request OTP</h2>
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSendOTP}>Send OTP</button>
      {message && <p className={isSuccess ? 'success' : 'error'}>{message}</p>}
    </div>
  );
};

export default RequestOTP;
