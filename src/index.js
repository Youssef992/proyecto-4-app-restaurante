import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home'
import AboutUs from './components/About Us/AboutUs';
import Menu from './components/Menu/Menu';
import Reservaciones from './components/Reservaciones/Reservaciones';
import Contacto from './components/Contacto/Contacto';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='#aboutus' element={<AboutUs />} />
        <Route path='#menu' element={<Menu />} />
        <Route path='#reservaciones' element={<Reservaciones />} />
        <Route path='#contacto' element={<Contacto />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
