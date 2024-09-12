import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const content = (
    <div className='lg:hidden absolute top-16 w-full left-0 right-0 transition z-20 h-screen bg-[#F9FBFF]'>
      <ul className='text-center text-xl p-20'>
        <li className='my-4 py-4 border-b  border-slate-800 hover:rounded'>
          <Link to='/home'>Home</Link>
        </li>
        <li className='my-4 py-4 border-b border-slate-800 hover:rounded'>
          <Link to='/about'>About</Link>
        </li>
        <li className='my-4 py-4 border-b border-slate-800 hover:rounded'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav>
      <div className='h-10vh flex justify-between z-50 text-black lg:py-5 px-10 py-4'>
        <div className='flex items-center flex-1'>
          <span className='text-3xl font-bold'>LOGO</span>
        </div>
        <div className='lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-10 mr-16 text-[18px]'>
              <li>
                <Link to='/home'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>{nav && content}</div>

        <button className='block lg:hidden md:hidden transition' onClick={handleNav}>
          {nav ? <FaTimes /> : <IoMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
