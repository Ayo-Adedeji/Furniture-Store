import React from 'react'
import Footer from '../components/Footer';
import Ourgallery from '../components/OurGallery';
import Navbar from '../components/Navbar';


const Gallery = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-20'>
    <Ourgallery/>
    </div>
    
    <Footer/>
    </>
  )
}

export default Gallery;