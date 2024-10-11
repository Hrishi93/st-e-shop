import React from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const location = useLocation();
  const { product } = location.state;

  const handlePayment = () => {
    // Implement payment processing logic here
    console.log(`Processing payment for: ${product.name}`);
  };

  return (
    <div className="payment-container">
      <h2>Payment for {product.name}</h2>
      <p>Price: {product.price}</p>
      <button className="payment-button" onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
