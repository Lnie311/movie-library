import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Favorites from './pages/Favorites'
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import { MovieProvider } from './context/MovieContext'
import NavBar from './comps/NavBar'

function App() {

  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}


export default App
