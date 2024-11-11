import { useEffect, useState } from 'react';
import arrowDown from '../../../public/arrow_down.svg';

function WeCreate() {
    const data = [
        { id: 1, img: "", title: "MARINE PLUS SHIP TRACKING SYSTEM" },
        { id: 2, img: "", title: "MARINE PLUS SHIP TRACKING SYSTEM" },
        { id: 3, img: "", title: "MARINE PLUS SHIP TRACKING SYSTEM" },
        { id: 4, img: "", title: "MARINE PLUS SHIP TRACKING SYSTEM" },
        { id: 5, img: "", title: "MARINE PLUS SHIP TRACKING SYSTEM" },
        { id: 6, img: "", title: "MARINE PLUS SHIP TRACKING SYSTEM" },
        { id: 7, img: "", title: "MARINE PLUS SHIP TRACKING SYSTEM" },
        { id: 8, img: "", title: "MARINE PLUS SHIP TRACKING SYSTEM" },
    ];

    const firstBoxData = data.filter((_, index) => index % 3 === 0);
    const secondBoxData = data.filter((_, index) => index % 3 === 2);
    const thirdBoxData = data.filter((_, index) => index % 3 === 1);

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='relative flex flex-col gap-2 w-11/12 mx-auto mt-20'>
            <div className='w-9/12 relative z-10'>
                <div className='flex flex-col gap-3 mb-5 pl-8'>
                    <h1 className='text-3xl font-black'>OUR PROJECTS</h1>
                    <p className='text-second'>Discover the next inspiring talks in industry</p>
                </div>
                <div className='flex gap-8'>
                    <div className='flex'>
                        <img src={arrowDown} alt="" className='w-9 h-[30%]' />
                    </div>
                    <div className="flex flex-col gap-3">
                        {/* First box */}
                        <div className="grid grid-cols-3 gap-3 w-11/12 h-[220px]">
                            {firstBoxData.map(item => (
                                <div key={item.id} className='bg-blue-900 w-full h-full p-5'>
                                    <h3 className='text-2xl text-white'>{item.title}</h3>
                                </div>
                            ))}
                        </div>
                        {/* Second box */}
                        <div className="grid grid-cols-3 gap-3 w-11/12 h-[220px]">
                            {secondBoxData.map(item => (
                                <div key={item.id} className='bg-blue-900 w-full h-full p-5'>
                                    <h3 className='text-2xl text-white'>{item.title}</h3>
                                </div>
                            ))}
                        </div>
                        {/* Third box */}
                        <div className="grid grid-cols-3 gap-3 w-11/12 h-[220px]">
                            {thirdBoxData.map(item => (
                                <div key={item.id} className='bg-blue-900 w-full h-full p-5'>
                                    <h3 className='text-2xl text-white'>{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <span
                className='strokeText absolute -bottom-14 left-40 top-20 text-9xl text-center font-medium transition-transform duration-300 z-0'
                style={{ transform: `translateX(${scrollPosition * 0.4}px)` }}
            >
                {scrollPosition > 100 ? (
                    <>
                        We
                        <br />
                        Create
                    </>
                ) : (
                    ""
                )}
            </span>
        </div>
    );
}

export default WeCreate;
