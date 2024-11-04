/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Components/Pagination';
import axios from 'axios';

const BlogPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(2);

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    setPage(page + 2);
  };

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3000/posts?_page=${page}&_limit=5`);
    setData(response.data);
    console.log('dari ', response.data);
  };

  useEffect(() => {
    fetchData();
    // setData(page)
  }, [page]);

  const date = new Date();
  const dateId = date.toDateString('id');
  return (
    <div className='container'>
      <h3 className='mt-5 fs-2 mb-4'>Recent Posts</h3>
      {data.map((item, index) => {
        return (
          <div className='mt-2' key={index}>
            <Link to={`/blog/${item.id}`} className='text-decoration-none text-light'>
              <h4 className='fs-4  color-cstm'>{item.title}</h4>
            </Link>
            <span className='fs-6'>
              {' '}
              <i className='bi bi-calendar3'></i> {dateId}
            </span>
            <p className='fs-5 lead'>{item.desc}</p>
          </div>
        );
      })}
      {/* <Pagination pagination={pagination} handlePageChange={handlePageChange} /> */}
      <div className='pagination-cstm'>
        <div className='d-flex justify-content-center align-items-center' style={{ color: '#D3D3D3' }}>
          <button onClick={handlePrevPage} className='btn btn-link text-light'>
            Prev
          </button>
          <span className='mx-2'></span>
          <button onClick={handleNextPage} className='btn btn-link text-light'>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
