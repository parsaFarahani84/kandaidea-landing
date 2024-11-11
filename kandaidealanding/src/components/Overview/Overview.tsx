import image from '../../../public/overview.svg';
import arrow from '../../../public/arrow_down.svg';

function Overview() {
    return (
        <div className="grid grid-cols-2 mt-28 w-11/12 m-auto">
            <div className='flex'>
                <img src={arrow} alt='' className='h-w-2/3 mt-2' />
                <div className='flex flex-col gap-4 pl-10'>
                    <h1 className='text-5xl font-black text-second'>OVERVIEW</h1>
                    <h2 className='text-3xl text-main leading-10 customThinWeight'>THE CONFLUENCE OF<br />
                        ENGINEERING & CREATIVITY</h2>
                    <p className='text-lg text-second'>Kanda Idea is a leading Iranian company with a long-term successful experience in providing technology-based engineering, monitoring (supervising), and management services in mega-projects, enterprises, and the public sector.</p>
                </div>
            </div>

            <div className='flex justify-center align-flex-start'>
                <img alt='' src={image} className='w-9/12' />
            </div>
        </div>
    )
}

export default Overview
