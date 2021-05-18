import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/style/global.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
