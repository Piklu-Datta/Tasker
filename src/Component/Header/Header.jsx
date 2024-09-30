// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../assets/images (1).png'
const Header = () => {
    return (
       <nav className='py-6 md:py-8 fixed top-0 w-full bg-[#191D26] z-50'>
         <div className='container mx-auto flex items-center justify-between gap-x-6'>
            <a>
                <img 
                 className='h-[45px]'
                src={logo} alt="" />
            </a>
         </div>
       </nav>
    );
};

export default Header;