/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import parse from 'html-react-parser';
// import { fetchDataDetail } from '../utils/api';

const DetailPage = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        // console.log(response.data);
        setBlog(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogDetail();
  }, [id]);

  const content = blog.content;
  // console.log(blog);
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='display-4'>{blog.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
