import React from 'react'

function Moviecard({poster_path, name}) {
  return (
    <>
    <div className='h-[40vh] w-[200px] m-3 bg-center bg-cover rounded-2xl hover:opacity-85 hover:cursor-pointer' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
      <div className='text-white text-l bg-gray-900/60 text-center font-ubuntu rounded-2xl'>
      {name}
      </div>
    </div>
  </>
  )
}

export default Moviecard