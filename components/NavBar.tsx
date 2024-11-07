import React from 'react';
import { PiUserListDuotone } from 'react-icons/pi';
const Navbar = () => {
  return (
    <nav className='bg-gray-800 py-4'>
      <div className='container mx-auto flex justify-start items-center'>
        <div className='flex items-center mx-2 sm:mx-3 md:mx-4 lg:mx-5 '>
          <PiUserListDuotone className='text-gray-300 text-4xl'/>
        </div>
        <div>
          <span className='text-white font-bold text-2xl'>User List</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
