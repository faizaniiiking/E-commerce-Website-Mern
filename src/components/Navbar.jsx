import React from 'react'
import {assets} from "../assets/assets"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between py-5 font-medium'>
        <img src={assets.logo} alt="" />

        <ul className='hidden sm:flex items-center gap-3'>
            <NavLink to="/" className= "flex flex-col items-center gap-1">
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />

            </NavLink>

            <NavLink to="/collection" className= "flex flex-col items-center gap-1">
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />

            </NavLink>

            <NavLink to="/about" className= "flex flex-col items-center gap-1">
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />

            </NavLink>

            <NavLink to="/contact" className= "flex flex-col items-center gap-1">
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700' />

            </NavLink>


        </ul>
      
    </div>
  )
}

export default Navbar
