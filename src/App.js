import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavigationBar';
import Shop from './pages/Shop';
import Reservations from './pages/Reservations';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
