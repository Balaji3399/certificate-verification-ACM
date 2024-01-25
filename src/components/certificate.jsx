import React from "react";
import { Link } from 'react-router-dom' ;
import img from "../components/images/certificate.png" ;
import { IoIosListBox } from "react-icons/io";

export default function certificate(){
    return (
        <>
            <div className="my-20">
                <div className="flex lg:flex-row sm:flex-col">
                    <div className="w-6/12 h-96 mx-16 border-2 border-black flex flex-col items-center justify-center">
                        <img className="w-4/12 relative" src={img} />
                        <div className="flex flex-col my-6 gap-4 relative -bottom-9">
                            <h2 className=" text-[26px] font-taviraj font-semibold">Certificate For Participation</h2>
                            <p className=" text-sm flex justify-center text-center ">Unlocking DSA Workshop By - ACM <br /> Shared to "Username" </p>
                        </div>
                        <Link to='/Certificate' className='w-full btn bg-[#77AA5F] lg:w-5/12  p-3 text-center text-[#000] font-bold relative lg:-bottom-10' >Share Certificate</Link>
                    </div>
                    <div className="w-4/12 h-96 border-2 border-black">
                        <div className="text-center w-full text-[#D84727] font-taviraj font-semibold text-[22px]">
                            <IoIosListBox className="w-full items-center  text-[#D84727] text-[50px]" />
                            Authentication
                        </div>
                        <div className=" w-10/12 flex flex-col gap-10 relative -bottom-10">
                             <div className="flex flex-row my-auto justify-between mx-5">
                                <p className="font-bold">Certificate ID</p>
                                <p>123456789</p>
                                <Link className="text-[#D84727] font-taviraj">COPY</Link>
                             </div>
                             <div className="flex flex-row my-auto justify-between mx-5">
                                <p className="font-bold">Verified To</p>
                                <p>User Name </p>
                                <p></p>
                             </div>
                             <div className="flex flex-row my-auto justify-between mx-5">
                                <p className="font-bold">Issued On</p>
                                <p> 2024 - 01 - 12 </p>
                                <p></p>
                             </div>
                             <div className="flex flex-row my-auto justify-between mx-5">
                                <p className="font-bold">Valid Upto</p>
                                <p>2026 - 01 - 12 </p>
                                <p></p>
                             </div>
                        </div>
                        <div className="w-full flex  items-center justify-center ">
                             <Link className=" btn bg-[#77AA5F] lg:w-5/12  p-3 text-center text-[#000] font-bold relative lg:-bottom-16" >Download a Copy </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}