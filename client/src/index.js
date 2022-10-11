import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Data from './Data';
import Login from './login';
import Footer from './footer'
import Navbar from './navbar';
import Home from './pages/Home';
import Pregister from './pages/prof_register';
import { BrowserRouter, Routes, Route } from "react-router-dom";






export default function App1() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          
          <Route path="/" element={<Home />} />
   
          <Route path="professional" element={<Login />} />

          <Route path="data" element={<Data />} />
          <Route path="proff_register" element={<Pregister />} />
          
          
          
      </Routes>
      <Footer/>
    </BrowserRouter>
      
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App1 />);
