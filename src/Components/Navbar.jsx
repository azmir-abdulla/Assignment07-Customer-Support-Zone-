import React from 'react';

const Navbar = () => {
    return (
          <div className=" bg-purple-100 shadow-md border-b-[0.5px] border-gray-300">
    
      <nav className="px-8 py-4 flex justify-between items-center">
        <h1 className="md:text-xl text-sm font-bold text-black">PH University</h1>
        <div className="md:flex hidden items-center gap-6">
          <a href="#" className="text-gray-600">
            Home
          </a>
          <a href="#" className="text-gray-600">
            Faculty
          </a>
          <a href="#" className="text-gray-600">
            Students
          </a>

          <a href="#" className="text-gray-600">
            Contact
          </a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
            + New Assignment
          </button>
        </div>
      </nav>
     
    </div>
    );
};

export default Navbar;