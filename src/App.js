import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products'
import Cart from './pages/Cart';
import Login from './pages/Login';
import Header from './components/Header'
import PaymentPage from './pages/PaymentPage';
function App() {
  return (<div>
    <Header />
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  </div>);
  }
  
  
  export default App;
  {
    /*return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  ); */
 
  }
