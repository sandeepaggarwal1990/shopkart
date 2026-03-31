import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <BrowserRouter>
      <Header cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
