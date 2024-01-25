import React from 'react';
import Navbar from '../components/Navbar';
import RightPart from '../components/RightPart';
import LeftPart from '../components/LeftPart';
import Footer from '../components/Footer' ;


export default function Home() {
  return (

    <div className='flex flex-col min-h-screen '>
      <Navbar />
      <div className='flex flex-col sm:flex-row-reverse gap-10 flex-1 my-5'>
        <RightPart />
        <LeftPart />
      </div>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
