import { useState } from 'react'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import ProductDetail from './pages/ProductDetail'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Ye parameter wala route hai */}
      </Routes>
    </>
  )
}

export default App
