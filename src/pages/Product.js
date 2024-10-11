import React from 'react';
import './Product.css'; // Ensure you have some basic styling


const Product = ({ id, name, price, image, description, onAddToCart}) => {
  const handleAddToCart = () => {
    // Call the onAddToCart function with the product ID
    onAddToCart(id);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h4 className="product-name">{name}</h4>
      <p className="product-price">{price}</p>
      <p className="product-description">{description}</p>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
