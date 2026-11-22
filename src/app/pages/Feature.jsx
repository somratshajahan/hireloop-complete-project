import React from "react";

import {
  FiSearch,
  FiTrendingUp,
  FiBarChart2,
  FiBookmark,
  FiMousePointer,
  FiFileText,
  FiHexagon,
} from 'react-icons/fi';



const features = [
  {
    icon: FiSearch,
    title: 'Smart Search',
    description: 'Find your ideal job with advanced filters.',
  },
  {
    icon: FiTrendingUp,
    title: 'Salary Insights',
    description: 'Get real salary data to negotiate confidently.',
  },
  {
    icon: FiBarChart2,
    title: 'Top Companies',
    description: 'Apply to vetted companies that are hiring.',
  },
  {
    icon: FiBookmark,
    title: 'Saved Jobs',
    description: 'Manage apps & favorites on your dashboard.',
  },
  {
    icon: FiMousePointer,
    title: 'One-Click Apply',
    description: 'Simplify your job applications for an easier process!',
  },
  {
    icon: FiFileText,
    title: 'Resume Builder',
    description: 'Create professional resumes with modern templates.',
  },
  {
    icon: FiHexagon,
    title: 'Skill-Based Matching',
    description: 'Discover jobs that match your skills and experience.',
  },
  {
    icon: FiTrendingUp,
    title: 'Career Growth Resources',
    description: 'Boost your career with quick interview tips.',
  },
];

const Feature = () => {
  return (
    <div className="bg-[#151516] pt-10">
      <div>
        <p className="text-white text-center opacity-35">FEATURE JOB</p>
        <h2 className="text-center font-semibold text-white text-2xl">
          Everything you need
          <br /> to succeed
        </h2>
      </div>


      {/* card section */}
      <section className="w-full bg-[#121215] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-4 group">
                {/* Left Dark Icon Box */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-b from-[#08080a] to-[#17171c] border border-white/[0.06] flex items-center justify-center shrink-0 shadow-inner group-hover:border-purple-400/30 transition-colors">
                  <Icon className="w-6 h-6 text-[#D8B4FE]" />
                </div>

                {/* Right Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-white font-semibold text-base leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Feature;
