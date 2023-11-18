import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactUsPage from './components/Contact';
import Design from './components/Design';
import Magazine from './components/Magazine';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import BookingForm from './components/Booking';
import DesignLog from './components/DesignLog';
import HomeLog from './components/HomeLog';


function App() {
  
  
  return (
   
      <Router>
     

      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/homeLog" element={<HomeLog/>} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/design" element={<Design />} />
        <Route path="/designLog" element={<DesignLog />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    </Router>   

  );
}

export default App;
