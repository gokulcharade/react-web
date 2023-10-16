"use Client"
import About from '@/Components/About';
import Banner from '@/Components/Banner';
import Quicknav from '@/Components/Quicknav';
import Quicklinks from '@/Components/Quicklinks';
import React from 'react';
import Feedback from '@/Components/Feedback';

const Index = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Quicklinks/>
      <Quicknav heading="Portfolio" subheading="We offer"/>
      <Feedback/>
      <Quicknav heading="Blogs" subheading="Read Our"/>
    </div>
  )
}

export default Index; 