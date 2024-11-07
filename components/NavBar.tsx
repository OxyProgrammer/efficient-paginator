import React from 'react';
import { PiUserListDuotone } from 'react-icons/pi';
const Navbar = () => {
  return (
    <nav className='bg-gray-800 py-4'>
      <div className='flex items-center'>
        <PiUserListDuotone className='text-gray-300 text-4xl mx-2 sm:mx-3 md:mx-4 lg:mx-4' />
        <span className='text-white font-bold text-2xl'>User List</span>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
