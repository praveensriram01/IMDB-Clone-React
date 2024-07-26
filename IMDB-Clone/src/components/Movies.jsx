import React from 'react'
import Moviecard from './Moviecard'

function Movies() {
  return (
    <div className='p-5 bg-black'>
        <div className='text-2xl m-5 font-bold font-ubuntu text-center text-whitecus'>Latest Trending Movies</div>
        <div className='flex justify-between'>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
        </div>
        <div className='flex justify-between'>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
            <Moviecard/>
        </div>
    </div>
  )
}

export default Movies