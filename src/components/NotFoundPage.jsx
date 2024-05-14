// NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return <div className=' flex items-center justify-center h-[80dvh]'>
    <div className='flex flex-col  gap-4 items-center justify-center text-center'>
    <p className='text-lg font-semibold'>404 - Not Found</p>
    <Link to="/"><button className='p-4 bg-indigo-800 text-lg font-bold text-white rounded-lg'>Back to Homepage</button></Link>
    </div>
  </div>;
};

export default NotFoundPage;
