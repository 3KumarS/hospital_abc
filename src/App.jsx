import { useState } from 'react'
import Footer from "./Components/Footer/Footer.jsx"
import './App.css'
import CardFooter from './Components/Home/CardFooter.jsx'
import Disclaimer from './Components/Home/Disclaimer.jsx'
import CrouselFooter from "./Components/Footer/Footer.jsx"
import CardBox from './Components/Home/CardBox.jsx'
import Navbar from './Components/Header/Header.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx'
import Header from './Components/Header/Header.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Components/Home/Home.jsx'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className="App">
          <Header />          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/cardbox" element={<CardBox />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/crouselfooter" element={<CrouselFooter />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
