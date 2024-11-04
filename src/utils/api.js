import axios from 'axios';

export const fetchDataBlog = async () => {
  const reponse = await axios.get('http://localhost:3000/posts?_limit=5', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return reponse.data;
};

export const fetchDataDetail = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log('There was a problem with the fetch operation :', error);
  }
};
