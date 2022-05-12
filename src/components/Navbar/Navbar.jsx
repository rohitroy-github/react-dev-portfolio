import React from 'react';
import './Navbar.scss'; 
import { useState } from 'react';

import {HiMenuAlt4, HiX} from 'react-icons/hi'; 
import {motion} from 'framer-motion'; 

import { images  } from '../../constants';

const Navbar = () => {
    const [Toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
        {/* navigation bar for desktop devices */}
        <div className='app__navbar-logo'>
            <img src={images.logo}></img>
        </div>
        <ul className='app__navbar-links'>
            {['Home', 'About', 'Work', 'Skills', 'Contact'].map((item) => (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
        {/* for mobile applications  */}
        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)} />

            {Toggle && (
                <motion.div 
                whieInVeiw={{x: [300, 0]}}
                transition ={{ duration: 0.85, ease: 'easeOut' }}>

                <HiX onClick={() => setToggle(false)} />
                <ul>
                {['Home', 'About', 'Work', 'Skills', 'Contact'].map((item) => (
                    <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a> 
                        {/* This onClick will close the menu once wer click any option and take us to the part of the page we just selected */}
                    </li>
                ))}
                </ul>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar;