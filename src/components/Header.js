import React, { useState, useEffect } from 'react';
import './Header.css'; // Ensure you have some basic styling

const Header = ({ onSearch, onCategoryChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory, setSelectedCategory] = useState('all');
  const [location, setLocation] = useState('Fetching location...');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
            .then(response => response.json())
            .then(data => {
              setLocation(`${data.city}, ${data.principalSubdivision}, ${data.countryName}`);
            })
            .catch(error => {
              console.error('Error fetching location:', error);
              setLocation('Unable to fetch location');
            });
        },
        (error) => {
          console.error('Error getting geolocation:', error);
          setLocation('Location access denied');
        }
      );
    } else {
      setLocation('Geolocation not supported');
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
      setCategory(event.target.value);
      onCategoryChange(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm, category);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src="https://www.logotypes101.com/logos/643/FA248AF41B55A43CA2F9F732BE688B46/Electroshop.png" alt="Logo1" className="logo" /> {/* Replace with your logo path */}
      </div>
      <div className="header-center">
        <select className="category-select" value={category} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="Musical Instruments">Musical Instruments</option>
          <option value="tv">TV</option>
          <option value="camera">Camera</option>
          <option value="laptop">Laptop</option>
          <option value="desktop">Desktop</option>
          <option value="headset">Headset</option>
          <option value="smartwatch">Smartwatch</option>
        </select>
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      <div className="header-right">
        <span className="location-indicator">{location}</span>
      </div>
    </header>
  );
};

export default Header;
