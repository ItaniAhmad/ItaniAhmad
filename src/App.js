import React from 'react';
import './App.css';
import Home from './Components/pages/Home';
import Navbar from'./Components/Navbar';
import{ BrowserRouter as Router,Routes  ,Route } from 'react-router-dom'

import SignUp from './Components/pages/SignUp';
import ScrollToTop from "./ScrollToTop";
import About from './Components/pages/About';
function App() {
  return (
    < >
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes >
      <Route path='/' exact element={<Home/>} />
      <Route path='/About' element={<About/>} />
      
      </Routes>
    </Router>
    </>
  );
}

export default App;
