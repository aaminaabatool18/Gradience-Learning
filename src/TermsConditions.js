// TermsConditions.js
import React from 'react';
import './TermsConditions.css'; // Add custom CSS if needed

const TermsConditions = ({ onClose }) => {
  return (
    <div className="terms-modal">
      <div className="terms-modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Terms & Conditions</h2>

        <h3>1. Introduction</h3>
        <p>
          These Terms and Conditions govern the use of our website and services. By accessing or using our website, you agree to comply with these Terms and Conditions. If you do not agree to these terms, you should not use our services.
        </p>

        <h3>2. User Responsibilities</h3>
        <p>
          As a user, you agree to provide accurate information during registration, keep your login credentials secure, and comply with applicable laws and regulations. You are responsible for all activities that occur under your account.
        </p>

        <h3>3. Privacy Policy</h3>
        <p>
          We respect your privacy. Our <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> outlines how we collect, use, and protect your data.
        </p>

        <h3>4. Termination</h3>
        <p>
          We may suspend or terminate your account if you violate these Terms and Conditions. We reserve the right to deny access to our services without notice if any violation occurs.
        </p>

        <h3>5. Modifications</h3>
        <p>
          We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be posted on this page, and your continued use of our services after such changes signifies your acceptance of the modified terms.
        </p>

        <h3>6. Limitation of Liability</h3>
        <p>
          Our liability is limited to the fullest extent permitted by law. We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or services.
        </p>

        <h3>7. Governing Law</h3>
        <p>
          These Terms and Conditions are governed by and construed in accordance with the laws of Pakistan. Any disputes will be resolved in the competent courts of Abbottabad.
        </p>

        <h3>8. Contact Us</h3>
        <p>
          If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:support@gradiance.com">support@gradience.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
