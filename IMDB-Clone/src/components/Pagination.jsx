import React from 'react'

function Pagination({pagePrev, pageNo, pageNext}) {
  return (
    <>
    <div className='bg-black flex justify-center p-2'>
        <div onClick={pagePrev} className='px-10'><i class="fa-solid fa-arrow-left fa-xl hover:text-lg hover:cursor-pointer" style={{color: "#ffffff",}}/></div>
        <div className='font-bold text-xl text-center text-whitecus font-ubuntu'>{pageNo}</div>
        <div onClick={pageNext} className='px-10'><i class="fa-solid fa-arrow-right fa-xl hover:text-lg hover:cursor-pointer" style={{color: "#ffffff",}}/></div>
    </div>
    </>
  )
}

export default Pagination