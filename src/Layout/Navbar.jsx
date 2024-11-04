/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container mt-5 px-0'>
      <nav className='navbar  text-white'>
        <div className='container-fluid flex'>
          <Link to={'/'} className='navbar-brand text-white '>
            <h2>AstroPapers</h2>
          </Link>

          <div className='nav'>
            <Link to={'/blog'} className='nav-link text-white'>Posts</Link>
            <Link to={'/tags'} className='nav-link text-white'>Tags</Link>
            <Link to={'/about'} className='nav-link text-white'>About</Link>
          </div>
        </div>
      </nav>
      <div className='border border-danger-subtle mt-2 mx-2'></div>
    </div>
  );
};

export default Navbar;
