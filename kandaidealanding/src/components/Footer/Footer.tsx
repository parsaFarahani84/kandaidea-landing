import React from 'react';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import arrowUp from '../../../public/arrow_down.svg';
import logo from '../../../public/second-logo.svg';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-second flex mt-20 w-11/12 mx-auto" >
            <div className='flex flex-col w-full'>
                <div className='flex'>
                    <div className='w-16' >
                        <a href='#top'><img src={arrowUp} alt='' className='rotate-180' /></a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-20 text-sm">
                        {/* Industries Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">INDUSTRIES</h3>
                            <ul className="space-y-2">
                                <li className=' transition duration-200 cursor-pointer'>Maritime</li>
                                <li className='hover:text-main transition duration-200 cursor-pointer'>Oil & Gas</li>
                                <li className='hover:text-main transition duration-200 cursor-pointer'>Telecommunication</li>
                                <li className='hover:text-main transition duration-200 cursor-pointer'>Agriculture</li>
                                <li className='hover:text-main transition duration-200 cursor-pointer'>Roads & Cities</li>
                                <li className='hover:text-main transition duration-200 cursor-pointer'>IT Infrastructure</li>
                            </ul>

                        </div>

                        {/* Services Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
                            <ul className="space-y-2">
                                <li className='hover:text-main transition duration-200 cursor-pointer'>Data Providing</li>
                                <li className='hover:text-main transition duration-200 cursor-pointer'>Data Engineering</li>
                                <li className='hover:text-main transition duration-200 cursor-pointer'>Engineering Design</li>
                                <li className='hover:text-main transition duration-200 cursor-pointer'>GIS & Geomatic</li>
                            </ul>
                        </div>

                        {/* Cooperation Section */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">COOPERATION</h3>
                            <ul className="space-y-2">
                                <li className='hover:text-main transition duration-200 cursor-pointer'>Contact Us</li>
                                <li className='hover:text-main transition duration-200 cursor-pointer'>Get Job</li>
                                <li className='hover:text-main transition duration-200 cursor-pointer'>Company Profile</li>
                                <li className='hover:text-main transition duration-200 cursor-pointer'>About Kanda Idea</li>
                            </ul>
                            <div className="mt-4">
                                <span>Change Language: </span>
                                <button className="text-blue-500">Fa</button> / <button className="text-blue-500">En</button>
                            </div>
                        </div>
                        {/* Co Logo*/}
                        <div>
                            <img src={logo} alt='' />
                        </div>
                    </div>
                </div>
                {/* -------------------- */}
                <div className='flex justify-between items-center mt-10'>


                    <div className="flex items-center space-x-4 mt-4">
                        <FaLinkedin className="text-xl cursor-pointer" />
                        <FaInstagram className="text-xl cursor-pointer" />
                        <FaYoutube className="text-xl cursor-pointer" />
                        <button className="border px-3 py-1 text-sm">Media Center</button>
                    </div>

                    <div className="text-center text-second text-xs">
                        ©Copyright 2020. All Rights Reserved.
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;
