/* eslint-disable no-unused-vars */
import React from 'react';
import gambar1 from '../assets/gambar-1.png';



const AboutPage = () => {
  return (
    <div className='container'>
      <div className='min-h-screen bg-gray-900 text-gray-300 p-8'>
        <nav className='text-sm text-gray-400 mb-4'>
          Home &raquo; <span className='text-white'>About</span>
        </nav>

        <h1 className='text-4xl font-bold mb-6'>About</h1>

        <p className='mb-4'>AstroPaper is a minimal, responsive and SEO-friendly Astro blog theme. I designed and crafted this based on my .</p>
        <p className='mb-4'>This theme is aimed to be accessible out of the box. Light and dark mode are supported by default and additional color schemes can also be configured.</p>
        <p className='mb-4'>This theme is self-documented _ which means articles/posts in this theme can also be considered as documentations. So, see the documentation for more info.</p>

        <div className='flex justify-center my-8'>
          <img width={1000} src={gambar1} className='w-1/2' />
        </div>

        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Tech Stack</h2>
          <p className='mb-4'>This theme is written in vanilla JavaScript (+ TypeScript for type checking) and a little bit of ReactJS for some interactions. TailwindCSS is used for styling; and Markdown is used for blog contents.</p>
        </section>

        <section>
          <h2 className='text-2xl font-bold mb-4'>Features</h2>
          <p className='mb-4'>Here are certain features of this site:</p>
          <ul className='list-disc list-inside mb-4'>
            <li>Fully responsive and accessible</li>
            <li>SEO-friendly</li>
            <li>Dark mode support</li>
            <li>Minimal and modern design</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
