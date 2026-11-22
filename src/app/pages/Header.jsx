'use client'
import React from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';
import { IoBagRemove } from 'react-icons/io5';

const Header = () => {
    return (
        <div className='mt-20'>
  
             <h4 className='flex items-center gap-2 justify-center text-lg font-semibold '>
                <IoBagRemove />
            <span className='text-white'>50,000+ </span>new jobs this month</h4>

            <h2 className='flex items-center justify-center text-4xl font-semibold text-white'>
                Find Your Dream Job Today</h2>
                <p className='width-[600px] mx-auto mt-2 flex items-center justify-center text-white'>HireLoop connects top talent with world-class companies. Browse thousands of 
                    <br />curated opportunities and land your next role — faster.</p>
         
         <div className="w-full max-w-3xl mx-auto px-4 mt-8">
      {/* Search Bar Box */}
      <form
       
        className="flex flex-col sm:flex-row items-center bg-[#0d0d12]/90 border border-white/15 rounded-2xl p-2 shadow-lg backdrop-blur-md"
      >
        {/* Keyword Input */}
        <div className="flex items-center flex-1 w-full px-4 py-2.5">
          <FiSearch className="text-gray-400 text-lg shrink-0 mr-3" />
          <input
            type="text"
           
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Job title, skill or company"
            className="w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
          />
        </div>

        {/* Vertical Divider (Desktop) */}
        <div className="hidden sm:block w-1px h-7 bg-white/15 mx-2" />

        {/* Horizontal Divider (Mobile) */}
        <div className="block sm:hidden w-full h-1px bg-white/10 my-1" />

        {/* Location Input */}
        <div className="flex items-center flex-1 w-full px-4 py-2.5">
          <FiMapPin className="text-gray-400 text-lg shrink-0 mr-3" />
          <input
            type="text"
           
           
            placeholder="Location or Remote"
            className="w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
          />
        </div>

        {/* Purple Search Button */}
        <button
          type="submit"
          aria-label="Search Jobs"
          className="w-full sm:w-12 h-11 mt-2 sm:mt-0 bg-[#6C5CE7] hover:bg-[#5b4bc4] text-white rounded-xl flex items-center justify-center transition-colors shrink-0 cursor-pointer"
        >
          <FiSearch className="text-xl" />
        </button>
      </form>

      {/* Trending Position Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5">
        <span className="text-gray-400 text-xs sm:text-sm mr-1">
          Trending Position
        </span>
        <span className="text-gray-400 text-xs sm:text-sm mr-1">
        Product designer
        </span>
        <span className="text-gray-400 text-xs sm:text-sm mr-1">
        AI Engineering
        </span>
        <span className="text-gray-400 text-xs sm:text-sm mr-1">
       Dev-ops Engineer
        </span>
    
      </div>
    </div>
            
        </div>
    );
};

export default Header;