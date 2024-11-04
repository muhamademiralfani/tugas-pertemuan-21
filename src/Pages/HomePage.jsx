/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ blog }) => {
  const date = new Date();
  const dateId = date.toDateString('id');
  return (
    <div className='container mt-5 text-light'>
      <div className='mt-5'>
        <h1 className='mb-5'>Mingalaba</h1>
        <p className='lead'>
          AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro blog theme. This theme follows best practices and provides accessibility out of the box. Light and dark mode are supported by default. Moreover, color schemes
          can also be configured. <br /> Read the blog posts or check README for more info.
        </p>
        <p className='lead'>
          Social Links :<i className='bi bi-github mx-2'></i>
          <i className='bi bi-facebook mx-2'></i>
          <i className='bi bi-instagram mx-2'></i>{' '}
        </p>
      </div>
      <div className='mt-5 border-cstm'></div>
      <div>
        <h3 className='mt-5 fs-2 mb-4'>Recent Posts</h3>
        {blog.map((item, index) => (
          <div className='mt-2' key={index}>
            <Link to={`/blog/${item.id}`} className='text-decoration-none text-light'>
              <h4 className='fs-4 color-cstm'>{item.title}</h4>
            </Link>
            <span className='fs-6'>
              <i className='bi bi-calendar3'></i> {dateId}
            </span>
            <p className='fs-5 lead'>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className='py-5 text-center mt-5'>
        <Link to={'/blog'} className='text-decoration-none text-light'>
          <h5>
            All Posts <i className='bi bi-arrow-right'></i>
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
