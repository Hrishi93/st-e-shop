import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemove = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    alert('Product removed from cart');
  };

  const handleBuy = (product) => {
    // Navigate to the payment page or open a payment modal
    navigate('/payment', { state: { product } });
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="cart-item-price">{item.price}</p>
              </div>
              <div className="cart-item-actions">
                <button 
                  className="cart-item-remove" 
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
                <button 
                  className="cart-item-buy" 
                  onClick={() => handleBuy(item)}
                >
                  Buy
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
