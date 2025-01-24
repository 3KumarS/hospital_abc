import { useState } from 'react'
import NavbarFooter from "./Components/NavbarFooter.jsx"
import './App.css'
import CardFooter from './Components/CardFooter.jsx'
import Disclaimer from './Components/Disclaimer.jsx'
import CrouselFooter from './Components/CrouselFooter.jsx'
import CardBox from './Components/CardBox.jsx'
import Navbar from './Components/Navbar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <CardBox></CardBox>
      <CrouselFooter></CrouselFooter>
      <Disclaimer></Disclaimer>
      <CardFooter></CardFooter>
      <NavbarFooter></NavbarFooter>
    </>
  )
}

export default App
