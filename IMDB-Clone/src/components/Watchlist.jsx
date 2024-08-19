import React, { useEffect, useState } from 'react'
import genreID from '../Utilities/genreID'

function Watchlist({watchlist, setWatchList, handleRemoveWatchList}) {

  const [search, setSearch] = useState('')
  const [genrelist ,setGenrelist] = useState(['All Genres'])
  const [currGenre, setGenre] = useState('All Genres')

  let handleSearch = (e) => {
    setSearch(e.target.value)
  }

  let handleFilter = (genre) => {
    setGenre(genre)
  }

  let sortAscending = () => {
    let sortedAscending = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedAscending])
  }

  let sortDescending = () => {
    let sortedDescending = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedDescending])
  }

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreID[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenrelist(['All Genres', ...temp])
  },[watchlist])


  return (
    <>
      <div className='flex justify-center flex-wrap m-4'>
        {genrelist.map((genre) => {
          return <div onClick={() => {handleFilter(genre)}} className={currGenre==genre?"flex justify-center items-center p-3 w-auto h-auto bg-white border-2 border-graycus rounded-md mx-4 hover:opacity-80" : "flex justify-center items-center p-3 w-auto h-auto bg-white rounded-md mx-4 hover:opacity-80"}>{genre}</div>
        })}
        {/* <div className='flex justify-center items-center w-[6em] h-[2em] bg-white rounded-md mx-4 hover:opacity-80'>All</div>
        <div className='flex justify-center items-center w-[6em] h-[2em] bg-white rounded-md mx-4 hover:opacity-80'>Action</div>
        <div className='flex justify-center items-center w-[6em] h-[2em] bg-white rounded-md mx-4 hover:opacity-80'>Adventure</div> */}
      </div>


      <div className='flex justify-center my-4'>
        <input onChange={handleSearch} value={search} type='text' placeholder='Search movies' className='w-[20em] h-[2.5em] outline-none rounded-lg px-4'></input>
      </div>


      <div className='overflow-hidden rounded-lg border border-graycus border-opacity-10 m-8'>
        <table className='w-full text-graycus-500 text-center'>
          <thead className='border-b border-graycus border-opacity-10'>
            <tr>
              <th className='w-[50%]'>Name</th>
              <th className='w-[15%]'>Genre</th>
              <th className='flex items-center justify-around w-full'>
                <div onClick={sortAscending} className=' hover:cursor-pointer'><i className='fa-solid fa-arrow-up'></i></div>
                <div className=''>Ratings</div>
                <div onClick={sortDescending} className=' hover:cursor-pointer'><i className='fa-solid fa-arrow-down'></i></div>
              </th>
              <th className='w-[15%]'>Popularity</th>
            </tr>
          </thead>
          
          
          <tbody>
            {watchlist.filter((movieObj)=>{
              if(currGenre=='All Genres') { 
                return true;
              } else {
                return genreID[movieObj.genre_ids[0]]==currGenre
              }
            }).filter((movieObj)=>{
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
            }).map((movieObj) => {
              return <tr className='border-b border-graycus border-opacity-10' key={movieObj.id}>
              <td className='flex items-center text-left px-6 py-4 w-full'>
                <img className='w-[200px] h-[125px]' src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}/>
                <div className='mx-10 w-full left-0'>{movieObj.title}</div>
              </td>
              <td>{genreID[movieObj.genre_ids[0]]}</td>
              <td className='w-[15%]'>{movieObj.vote_average}</td>
              <td>{movieObj.popularity}</td>
              <td onClick={()=>handleRemoveWatchList(movieObj)} className='text-red-800 p-5 hover:cursor-pointer hover:text-red-400'>Delete</td>
            </tr>})}
            

            {/* <tr className='border-b-1 border-graycus border-opacity-10'>
              <td className='flex items-center px-6 py-4'>
                <img className='w-[150px] h-[125px]' src={`https://img.freepik.com/premium-psd/movie-poster-design-template_841014-17010.jpg?w=740`}/>
                <div className='mx-10'>Movie</div>
              </td>
              <td>8.5</td>
              <td>9</td>
              <td>Action</td>
              <td className='text-red-800'>Delete</td>
            </tr>  */}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist