import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import Cart from './Components/Cart/cart';
import Payment from './Components/Payment/payment';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;

