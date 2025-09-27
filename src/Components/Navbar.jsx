import React from 'react';
import Container from './Container';

const Navbar = () => {
  return (
    <Container>

      <div className="navbar bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto flex justify-between">

          <div className="flex justify-center items-center">
            <a className=" normal-case md:text-xl text-sm font-bold text-black">
              CS — Ticket System
            </a>
          </div>


          <div className="flex-none">
            <div className="dropdown dropdown-end lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Home</a></li>
                <li><a>FAQ</a></li>
                <li><a>Changelog</a></li>
                <li><a>Blog</a></li>
                <li><a>Download</a></li>
                <li><a>Contact</a></li>
                <li>
                  <button className="btn mt-2 w-full bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white border-0">
                    + New Ticket
                  </button>
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <ul className="menu menu-horizontal px-1 text-gray-600">
                <li><a>Home</a></li>
                <li><a>FAQ</a></li>
                <li><a>Changelog</a></li>
                <li><a>Blog</a></li>
                <li><a>Download</a></li>
                <li><a>Contact</a></li>
              </ul>
              <button className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white border-0">
                + New Ticket
              </button>
            </div>
          </div>
        </div>
      </div>

    </Container>

  );
};

export default Navbar;