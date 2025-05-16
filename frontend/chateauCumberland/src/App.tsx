import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Reservation from './pages/reservation'; 
import './App.css'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Router>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/reservation" element={<Reservation/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
