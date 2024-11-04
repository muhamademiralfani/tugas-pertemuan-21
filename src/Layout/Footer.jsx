/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <div className='container mt-5 text-light'>
      <div className='mt-5 border-cstm'></div>
      <div className='d-flex justify-content-between py-5'>
        <span>Copyright © 2024 | All rights reserved.</span>{' '}
        <div>
          <i className='bi bi-github fs-4 mx-2'></i>
          <i className='bi bi-facebook fs-4 mx-2'></i>
          <i className='bi bi-instagram fs-4 mx-2'></i>
          <i className='bi bi-linkedin fs-4 mx-2'></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
