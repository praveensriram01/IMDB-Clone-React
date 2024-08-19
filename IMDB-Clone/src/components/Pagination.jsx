import React from 'react'

function Pagination({pagePrev, pageNo, pageNext}) {
  return (
    <>
    <div className='flex justify-center p-4 m-3'>
        <div onClick={pagePrev} className='px-10'><i className="fa-solid fa-arrow-left fa-xl hover:text-lg hover:cursor-pointer" style={{color: "#242424",}}/></div>
        <div className='font-bold text-xl text-center text-graycus font-ubuntu'>{pageNo}</div>
        <div onClick={pageNext} className='px-10'><i className="fa-solid fa-arrow-right fa-xl hover:text-lg hover:cursor-pointer" style={{color: "#242424",}}/></div>
    </div>
    </>
  )
}

export default Pagination