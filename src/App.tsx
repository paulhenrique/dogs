import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './assets/style/global.scss';
import { ChakraProvider, Container } from "@chakra-ui/react"

import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Home from './pages/Home';
import theme from './assets/theme';
function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login/*" element={<Login />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  )
}

export default App;
