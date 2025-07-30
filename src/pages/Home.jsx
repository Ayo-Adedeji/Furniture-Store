import React, { lazy, Suspense } from 'react'
import Navbar from '../components/Navbar';

import Guarantee from '../components/Guarantee';
import InspiCollection from '../components/InspiCollection';
import Bys from '../components/Bys'

import OurGallery from '../components/Showroom';
import Spinner from '../components/Spinner';
import Lookroom from '../components/Lookroom';
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';
import HowSection from '../components/HowSection';




// const InspiCollection = () => lazy(() => import ('../Components/InspiCollection'));

const Home = () => {
  
  return (
    <div>
      <Navbar/>
      <MainSection/>
      <Guarantee/>
      <Suspense fallback={<Spinner/>}>
        <InspiCollection/>
      </Suspense>
      
      <Bys/>
      <OurGallery/>
      <Suspense fallback={<Spinner/>}>
        <HowSection/>
      </Suspense>
    <Lookroom/>
      <Footer/>
      
      
    </div>
  )
}

export default Home;