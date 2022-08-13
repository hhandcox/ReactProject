import React from 'react';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionSlice';


function App() {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchCampsites());
  dispatch(fetchPartners());
  dispatch(fetchPromotions());
}, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='contact' element={<ContactPage />}/>
        <Route path='directory' element={<CampsitesDirectoryPage />}/>
        <Route 
          path='directory/:campsiteId'
          element={<CampsiteDetailPage />}
        />
        <Route path='about' element={<AboutPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
