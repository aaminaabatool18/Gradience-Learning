import React from 'react';
import './CustomAlert.css';

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="alert-content">
        <span className="alert-message">{message}</span>
        <button className="alert-close" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default CustomAlert;
