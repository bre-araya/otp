import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const OTPInputField = ({ onChange }) => {
  const [otp, setOtp] = useState('');

  return (
    <OtpInput
      value={otp}
      onChange={(val) => {
        setOtp(val);
        onChange(val);
      }}
      numInputs={6}
      separator={<span>-</span>}
      inputStyle={{
        width: '2rem',
        height: '2rem',
        margin: '0 0.2rem',
        fontSize: '1.5rem',
        borderRadius: 4,
        border: '1px solid gray',
      }}
    />
  );
};

export default OTPInputField;
