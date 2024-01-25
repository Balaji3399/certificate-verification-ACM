import React from 'react';
import cap from "./images/graduationCap (1).png";

const RightPart = () => {
    return (
        <div className='w-1/2 lg:ml-auto sm:ml-auto sm:w-3/4 xs:ml-8 lg:w-1/2'>
            <div className='circles xs:translate-x-2 sm:translate-x-0 xl:translate-x-52 mt-14 w-fit'>
                <div className='circle1 w-36 h-36 sm:w-36 sm:h-36 lg:w-52 lg:h-52 rounded-full bg-[#FBE3B2] '>
                </div>
                <div className='cap absolute z-10 '>
                <img className='cap w-full absolute lg:w-8/12 xl:w-10/12 lg:-top-28 lg:left-20 sm:-top-14 sm:left-14 xs:w-9/12 xs:-top-16 xs:left-14 md:w-8/12 sm:w-8/12' src={cap} alt="Graduation Cap" />
                </div>
                <div className='circle2 w-36 h-36 sm:w-36 sm:h-36 lg:w-52 lg:h-52 rounded-full bg-[#D2F8FF] translate-x-full -z-10 '>
                </div>
            </div>
        </div>
    );
};

export default RightPart;
