import React, { useState } from 'react';
import './Home.css'; // Ensure you have some basic styling

const bestSellers = [
  {
    id: 1,
    name: 'Electric Guitar',
    price: '₹500',
    discount: '10% Off',
    image: 'https://images7.alphacoders.com/881/881331.jpg',
  },
  {
    id: 2,
    name: 'Digital Piano',
    price: '₹1000',
    discount: '15% Off',
    image: 'https://www.gak.co.uk/cdn-cgi/imagedelivery/g0MaIyh1SZefBaZsKuFj0g/prod/products/3a7f/6a1d-b86e-4b9b-aab6-98989691542b.jpg/650x630',
  },
  {
    id: 3,
    name: 'Drum Set',
    price: '₹700',
    discount: '20% Off',
    image: 'https://www.gak.co.uk/cdn-cgi/imagedelivery/g0MaIyh1SZefBaZsKuFj0g/prod/products/93c6/be0c-bf98-4db4-85b7-755d7a447f81.jpg/650x630',
  },
  {
    id: 4,
    name: 'Mobile Phone',
    price: '₹800',
    discount: '5% Off',
    image: 'https://m.media-amazon.com/images/I/81dT7CUY6GL._SL1500_.jpg',
  },
  {
    id: 5,
    name: 'Television',
    price: '₹1500',
    discount: '25% Off',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/qa75qn800ckxxl/gallery/in-qled-qn800c-qa75qn800ckxxl-535909387?$1300_1038_PNG$',
  },
  {
    id: 6,
    name: 'Camera',
    price: '₹1200',
    discount: '10% Off',
    image: 'https://m.media-amazon.com/images/I/6166GKdCA8L._SL1000_.jpg',
  },
  {
    id: 7,
    name: 'Laptop',
    price: '₹2000',
    discount: '15% Off',
    image: 'https://in-media.apjonlinecdn.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/8/R/8R1E6PA-5_T1691725028.png',
  },
  {
    id: 8,
    name: 'Smart Watch',
    price: '₹300',
    discount: '5% Off',
    image: 'https://m.media-amazon.com/images/I/71DFCg4yVBL._SL1500_.jpg',
  },
];

const Home = () => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  const handlePrevOffer = () => {
    setCurrentOfferIndex((prevIndex) => 
      prevIndex === 0 ? bestSellers.length - 1 : prevIndex - 1
    );
  };

  const handleNextOffer = () => {
    setCurrentOfferIndex((prevIndex) => 
      prevIndex === bestSellers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="home">
      <div className="offer-window">
        <button onClick={handlePrevOffer} className="arrow left-arrow">←</button>
        <div className="offer-content">
          <h2>offer of the day</h2>
          <img 
            src={bestSellers[currentOfferIndex].image} 
            alt={bestSellers[currentOfferIndex].name} 
            className="offer-image" 
          />
          <h4>{bestSellers[currentOfferIndex].name}</h4>
          <p>{bestSellers[currentOfferIndex].price}</p>
          <span className="discount">{bestSellers[currentOfferIndex].discount}</span>
        </div>
        <button onClick={handleNextOffer} className="arrow right-arrow">→</button>
      </div>
      <h1>Best Sellers</h1>
      <div className="best-sellers">
        {bestSellers.map(item => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <span className="discount">{item.discount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
