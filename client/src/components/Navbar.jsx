import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='flex justify-between items-center font-montserrat font-semibold px-5 py-1 lg:px-10 lg:py-2 sticky lg:static top-0 left-0 w-full bg-white z-50 shadow-md shadow-gray-200'>
      <div className='h-24 w-24 lg:w-28 lg:h-28'>
        <Link to={'/'}>
          <img
            src={logo}
            alt='Papcpn logo'
            className='object-cover w-full h-full'
          />
        </Link>
      </div>

      <ul
        className={`lg:flex lg:items-center lg:gap-10 ${
          openMenu
            ? `flex flex-col items-start gap-10  absolute top-[105px] left-0 h-screen w-4/5 bg-blue-950 text-white px-5 py-5`
            : 'hidden'
        }`}
      >
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to='/about'>About us</Link>
        </li>
        <li>
          <Link to='/standard'>Standard</Link>
        </li>
        <li>
          <Link to='/contact'>Contact us</Link>
        </li>
        <li className='lg:ml-12 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-md'>
          <Link to='/register/select'>Register</Link>
        </li>
      </ul>

      <button
        className='lg:hidden text-2xl border rounded-full p-2 bg-gradient-to-bl from-pink-500 to-blue-500 text-white'
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </nav>
  );
}
