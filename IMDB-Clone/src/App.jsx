import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Banner from './components/Banner'

function App() {

  let [watchlist, setWatchList] = useState([])

  let handleAddWatchList = (movieObj) => {
    let newWatchList = [...watchlist, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  let handleRemoveWatchList = (movieObj) => {
    let filterWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })
    setWatchList(filterWatchList)
    localStorage.setItem("moviesApp", JSON.stringify(filterWatchList))
    console.log(filterWatchList)
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage) {
      return 
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  }, [])

  return (
    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<> <Movies watchlist={watchlist} handleAddWatchList={handleAddWatchList} handleRemoveWatchList={handleRemoveWatchList}/> </>} />
        <Route path='/watchlist' element={<Watchlist watchlist={watchlist} setWatchList={setWatchList} handleRemoveWatchList={handleRemoveWatchList}/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App