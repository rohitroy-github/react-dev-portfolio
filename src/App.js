import React from 'react'
import './App.scss'; 

import { About, Footer, Header, Skills, Testimonials, Work } from './container'; 
import { Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
      {/* <h3>App.js Component</h3> */}
      <Navbar /> 
      <Header />
      <About /> 
      <Work /> 
      <Skills /> 
      <Testimonials /> 
      <Footer /> 
    </div>
  )
}

export default App