import React from 'react'
import Navbar from './components/navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Banner from './components/Banner'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<> <Banner/> <Movies/> </>} />
        <Route path='/watchlist' element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App