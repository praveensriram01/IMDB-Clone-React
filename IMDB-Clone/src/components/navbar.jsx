import React from 'react'
import Logo from '../designs/Garbage.png'
import { Link } from 'react-router-dom'


const navbar = () => {
  return (
    <div className='flex border-[1px] border-black space-x-10 items-center p-3 font-ubuntu bg-whitecus text-gray-900'>
        <img src={Logo} className='w-[60px]'/>
        <Link to='/' className='text-2xl font-medium'>Home</Link>
        <Link to='/watchlist' className='text-2xl font-medium'>Watchlist</Link>
    </div>
  )
}

export default navbar