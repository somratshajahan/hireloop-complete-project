import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <div className='w-[90%] mx-auto mt-4 bg-[#222222] rounded-2xl'>
            <div className='flex justify-between items-center'>
                {/* Logo section */}
                <div className='px-6 py-3'>
                    <Link href="/">
                    <Image className='w-154px' src={logo}  alt=''></Image>
                    </Link>
                </div>

                {/* Link section */}
                <div className='flex items-center gap-4 mr-4'>
                    <Link className='hover:text-[#5C53FE] text-white text-lg font-semibold' href="/browse-job">Browse Job</Link>
                    <Link className='hover:text-[#5C53FE] text-white text-lg font-semibold' href="/company">Company</Link>
                    <Link className='hover:text-[#5C53FE] text-white text-lg font-semibold' href="/pricing">Pricing</Link>
                </div>


                {/* Button section */}
            <div className='flex items-center gap-4 mr-4'>
                <Link className='hover:text-white text-xl text-[#5C53FE] font-semibold' href="/signin">SignIn</Link>
                <Link className='text-xl bg-[#5C53FE] text-white px-3 py-2 rounded-lg' href="/register">Get Started</Link>
            </div>
            </div>

            
            
        </div>
    );
};

export default Navbar;