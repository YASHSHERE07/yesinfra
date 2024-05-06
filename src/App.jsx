// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner2 from "./components/Banner2";
import ProductsPage from "./components/Products";
import AboutUs from "./components/AboutUs";
import Banner1 from "./components/Banner1";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#FFF2D7]">
      <Navbar />
      <div id="hero" className="section">
        <Hero />
      </div>
      <Banner1 />
      <div id="products" className="section">
        <ProductsPage />
      </div>
      <Banner2 />
      <div id="about" className="section">
        <AboutUs />
      </div>
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
