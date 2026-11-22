import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoBagRemove, IoBarChartOutline } from "react-icons/io5";
import { MdOutlineSavedSearch } from "react-icons/md";

const Seekers = () => {
  return (
    <div className="">
      <h2 className="flex  justify-center items-center text-white text-2xl mt-10">
        Assisting over 15,000 job seekers find their dream positions.
      </h2>

      <div className="flex gap-8 justify-center items-center mt-10">
        {/* 1st */}
        <div className="bg-linear-to-b rounded-lg from-[#010102] to-[#313131]">
          <div className="p-4">
            <span>
              <IoBagRemove className="text-white text-2xl" />
            </span>
            <p className="text-white text-2xl my-3 font-semibold">50K</p>
            <h4 className="text-xl text-white font-semibold">Active Now</h4>
          </div>
        </div>

        {/* 2nd */}
        <div>
          {" "}
          <div className="bg-linear-to-b rounded-lg from-[#010102] to-[#313131]">
            <div className="p-4">
              <span>
                <IoBarChartOutline className="text-white text-2xl" />
              </span>
              <p className="text-white text-2xl my-3 font-semibold">12K</p>
              <h4 className="text-xl text-white font-semibold">Companies</h4>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div>
          {" "}
          <div className="bg-linear-to-b rounded-lg from-[#010102] to-[#313131]">
            <div className="p-4">
              <span>
                <MdOutlineSavedSearch className="text-white text-2xl"/>
              
              </span>
              <p className="text-white text-2xl my-3 font-semibold">2M</p>
              <h4 className="text-xl text-white font-semibold">Job Seekers</h4>
            </div>
          </div>
        </div>

        {/* 4th */}
        <div>
          {" "}
          <div className="bg-linear-to-b rounded-lg from-[#010102] to-[#313131]">
            <div className="p-4">
              <span>
                <FaRegStar className="text-white text-2xl"/>
               
              </span>
              <p className="text-white text-2xl my-3 font-semibold">97%</p>
              <h4 className="text-md text-white font-semibold">Satisfication Rate</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seekers;
