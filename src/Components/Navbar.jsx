import React from 'react';
import Container from './Container';

const Navbar = () => {
  return (
    <div className=" bg-white shadow-md border-b-[0.5px] border-gray-300">

      <Container>
          <nav className="px-8 py-4 flex justify-between items-center">
        <h1 className="md:text-xl text-sm font-bold text-black">CS — Ticket System</h1>
        <div className="md:flex hidden items-center gap-6">
          <ul className='md:flex gap-6'>
            <li><a href="#" className="text-gray-600">Home</a></li>
            <li> <a href="#" className="text-gray-600"> FAQ</a></li>
            <li><a href="#" className="text-gray-600">Changelog </a></li>
            <li><a href="#" className="text-gray-600">Blog</a></li>
            <li><a href="#" className="text-gray-600">Download</a></li>
            <li><a href="#" className="text-gray-600">Contact</a></li>
          </ul>
          <button className="  hover:cursor-pointer bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md">
            + New Assignment
          </button>
        </div>
      </nav>
      </Container>

    </div>
  );
};

export default Navbar;