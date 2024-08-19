import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Moviecard from './Moviecard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddWatchList, handleRemoveWatchList, watchlist}) {

  const [movie, setMovie] = useState([])
  const [pageNo, setPageNo] = useState(1)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=95c2c9df3f397a5348e97d7dc47b29b5&language=en-US&page=${pageNo}`).then(function(res) {
      setMovie(res.data.results)
      console.log(res.data.results)
    })
  }, [pageNo])

  const pagePrev = () => {
    if(pageNo===1) {
      setPageNo(1)
    } else {
      setPageNo(pageNo-1)
    }
    
  }

  const pageNext = () => {
    setPageNo(pageNo+1)
  }
  
  return (
    <div className='p-5 bg-whitecus'>
        
        {/* <div className='text-2xl m-5 font-bold font-ubuntu text-center text-graycus'>Latest Trending Movies</div> */}
        <Pagination pagePrev={pagePrev} pageNo={pageNo} pageNext={pageNext}/>
        
        <div className='flex flex-wrap flex-row gap-5 justify-around'>
            {movie.map((movieObj)=>{
              return <Moviecard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddWatchList={handleAddWatchList} handleRemoveWatchList={handleRemoveWatchList} watchlist={watchlist}/>
            })}
        </div>
        <Pagination pagePrev={pagePrev} pageNo={pageNo} pageNext={pageNext}/>
    </div>
  )
}

export default Movies

// https://api.themoviedb.org/3/movie/popular?api_key=95c2c9df3f397a5348e97d7dc47b29b5&language=en-US&page=1

