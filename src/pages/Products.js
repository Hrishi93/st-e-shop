import React, { useContext, useState } from 'react';
import Product from './Product';
import './Products.css'; // Ensure you have some basic styling
import { CartContext } from './CartContext';

const productData = [
  {
    id: 1,
    name: 'Electric Guitar',
    category: 'Musical Instruments',
    price: '₹50000',
    image: 'https://images7.alphacoders.com/881/881331.jpg',
    description: 'High-quality electric guitar with a sleek design.',
  },
  {
    id: 2,
    name: 'Digital Piano',
    category: 'Musical Instruments',
    price: '₹100000',
    image: 'https://www.gak.co.uk/cdn-cgi/imagedelivery/g0MaIyh1SZefBaZsKuFj0g/prod/products/3a7f/6a1d-b86e-4b9b-aab6-98989691542b.jpg/650x630',
    description: 'Top-notch digital piano with excellent sound quality.',
  },
  {
    id: 3,
    name: 'Drum Set',
    category: 'Musical Instruments',
    price: '₹70000',
    image: 'https://www.gak.co.uk/cdn-cgi/imagedelivery/g0MaIyh1SZefBaZsKuFj0g/prod/products/93c6/be0c-bf98-4db4-85b7-755d7a447f81.jpg/650x630',
    description: 'Complete drum set with all necessary accessories.',
  },
  {
    id: 4,
    name: 'Smart TV',
    category: 'Electronics',
    price: '₹120000',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/ua85cu8000kxxl/gallery/in-crystal-uhd-cu8000-454608-ua85cu8000kxxl-536429361?$1300_1038_PNG$',
    description: 'High-resolution smart TV with advanced features.',
  },
  {
    id: 5,
    name: 'Smart TV',
    category: 'Electronics',
    price: '₹95000',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/qa75qn800ckxxl/gallery/in-qled-qn800c-qa75qn800ckxxl-535909387?$1300_1038_PNG$',
    description: 'High-resolution smart TV with AI features.',
  },
  {
    id: 6,
    name: 'Laptop',
    category: 'Electronics',
    price: '₹150000',
    image: 'https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/8/R/8R1E6PA-5_T1691725028.png',
    description: 'Powerful laptop for professional and personal use.',
  },
  {
    id: 7,
    name: 'Digital Camera',
    category: 'Electronics',
    price: '₹80000',
    image: 'https://m.media-amazon.com/images/I/6166GKdCA8L._SL1000_.jpg',
    description: 'Professional-grade digital camera with excellent image quality.',
  },
  {
    id: 8,
    name: 'Smartwatch',
    category: 'Wearables',
    price: '₹30000',
    image: 'https://m.media-amazon.com/images/I/71DFCg4yVBL._SL1500_.jpg',
    description: 'Smartwatch with health tracking and notification features.',
  },
  {
    id: 9,
    name: 'Smartwatch',
    category: 'Wearables',
    price: '₹35000',
    image: 'https://m.media-amazon.com/images/I/71veKxOYybL._SL1500_.jpg',
    description: 'Advanced smartwatch with GPS and heart rate monitoring.',
  },
  {
    id: 10,
    name: 'Headphones',
    category: 'Electronics',
    price: '₹20000',
    image: 'https://m.media-amazon.com/images/I/61SERvvX1jL._SL1500_.jpg',
    description: 'Noise-cancelling over-ear headphones with premium sound quality.',
  },
  {
    id: 11,
    name: 'Tablet',
    category: 'Electronics',
    price: '₹40000',
    image: 'https://m.media-amazon.com/images/I/6100f2qmEnL._SL1500_.jpg',
    description: 'High-performance tablet with stunning display and long battery life.',
  },
  
  {
    id: 12,
    name: 'Smart Phone',
    category: 'Electronics',
    price: '₹50000',
    image: 'https://m.media-amazon.com/images/I/81dT7CUY6GL._SL1500_.jpg',
    description: 'Next-gen gaming phone with 4K gaming support.',
  },
  // Add more products as needed
];

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };



  const filteredProducts = selectedCategory === 'All'
    ? productData
    : productData.filter(product => product.category === selectedCategory);

  return (
    <div className="products-container">
      <div className="category-filter">
        <button onClick={() => handleCategoryChange('All')}>All</button>
        <button onClick={() => handleCategoryChange('Musical Instruments')}>Musical Instruments</button>
        <button onClick={() => handleCategoryChange('Electronics')}>Electronics</button>
        <button onClick={() => handleCategoryChange('Wearables')}>Wearables</button>
      </div>
      <div className="products">
        {filteredProducts.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
