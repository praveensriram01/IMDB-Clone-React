import React from 'react'

function Banner() {
 return <div className='h-[20vh] md:h-[70vh] bg-fixed bg-contain bg-bottom flex items-end' style={{backgroundImage: `url(https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/new-deadpool-3-poster-from-marvel-studios-accused-of-using-ai.jpg)`}}>
    <div className='font-ubuntu text-white text-xl text-center w-full bg-zinc-800/40 p-2'>Deadpool and Wolvering</div>
  </div>
}

export default Banner

// style={{backgroundImage: `url(https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/new-deadpool-3-poster-from-marvel-studios-accused-of-using-ai.jpg)`}}