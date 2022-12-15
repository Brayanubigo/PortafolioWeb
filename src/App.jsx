import { useState } from 'react'
import 'bulma/css/bulma.min.css'
import 'animate.css';
import { BrowserRouter as Router ,  Route, Link, Routes } from 'react-router-dom';
import Inicio from './Components/Inicio';
import Contact from './Components/Contact';

function App() {
  

  return (
    <Router>
    <div >
      
      <Routes>
        <Route path='/' exact element={<Inicio/>}/>

      
        <Route path='/contacto' exact element={<Contact/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
