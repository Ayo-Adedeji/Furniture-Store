import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Showroom from '../components/Showroom';


const Gallery = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-20'>
    <Showroom/>
    </div>
    
    <Footer/>
    </>
  )
}

export default Gallery;