/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import DetailPage from './Pages/DetailPage';
import Footer from './Layout/Footer';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  let [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/posts?_limit=5&_page=${page}`);
        setData(response.data);
        setPagination({
          first: response.data.first,
          prev: response.data.prev,
          next: response.data.next,
          last: response.data.last,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch blog posts.');
        setLoading(false);
      }
    };
    fetchBlog();
  }, [page]);

  const handlePageChange = () => {
    setPage((page = page + 1));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage blog={data} />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:id' element={<DetailPage blog={data} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
