import React from 'react'
import addWatchlist from '../designs/1.png'
import removeWatchlist from '../designs/2.png'

function Moviecard({movieObj, poster_path, name, handleAddWatchList, handleRemoveWatchList, watchlist}) {

  function doesContent(movieObj) {
    for(let i=0; i<watchlist.length; i++) {
      if(watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <>
    <div className='bg-graycus w-[250px] h-[60vh] rounded'>
      <div className='w-[100%] h-[85%] m-0 bg-center bg-cover rounded hover:opacity-70 hover:cursor-pointer' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
        {doesContent(movieObj)? (<img onClick={()=>(handleRemoveWatchList(movieObj))} className='w-[50px] h-[50px]' src={removeWatchlist} />) : (<img onClick={()=>(handleAddWatchList(movieObj))} className='w-[50px] h-[50px]' src={addWatchlist} />)} 
      </div>
      <div className='w-[100%] h-[15%] m-0 p-2 text-graycus text-l bg-white font-ubuntu rounded text-center items-center'>
          {name}
      </div>
    </div>
  </>
  )
}

export default Moviecard


// add to watchlist - <a href="https://www.flaticon.com/free-icons/watchlist" title="watchlist icons">Watchlist icons created by HideMaru - Flaticon</a>