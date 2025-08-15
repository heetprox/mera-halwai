'use client';

import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full'>
        <Navbar/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page