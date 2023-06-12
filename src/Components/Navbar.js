import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import logo from '../assets/logo.png';
import AddHabit from './AddHabit.js';

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "Week View", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  const curr_date = new Date().toDateString();
  let [showAddhabit, setShowAddHabit] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white md:px-7 px-5'>
        <div className='font-bold text-2xl flex items-center gap-3'>
          <img src={logo} alt='logo' className='w-20 h-15 text-blue-600' />
          <span>Track Your Habits</span>
        </div>
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-8 cursor-pointer md:hidden w-7 h-7'>
          {
            open ? <HiXMark /> : <HiMenu />
          }
        </div>
        {/* linke items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
              </li>))
          }
          <button onClick={() => setShowAddHabit(true)}
            className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>
            Add Habit
          </button>

          <li className='md:ml-8 md:my-0 my-7 font-semibold'>
            <span className='text-gray-800 hover:text-blue-400 duration-500'>{curr_date}</span>
          </li>
        </ul>
      </div>
      <AddHabit show={showAddhabit} onClose={() => setShowAddHabit(false)} />
    </div>
  );
};

export default Navbar;