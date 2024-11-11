import { useState, useEffect, useRef } from "react";
// ---------------------COMPONENTS----------------------
import Navbar from "../Navbar/Navbar";
// ---------------------ACCETS----------------------
import icon from "../../../public/main-Logo.svg";
import swipericon1 from "../../../public/industries-w.svg";
import swipericon2 from "../../../public/services-w.svg";
import swipericon3 from "../../../public/R&D-w.svg";
import swipericonHead1 from "../../../public/services-ow.svg";
import swipericonHead2 from "../../../public/R&D-ow.svg";
import swipericonHead3 from "../../../public/industries-ow.svg";
import next from "../../../public/arrow_d.svg";
import threeicon from "../../../public/8_w.svg";
import current1 from "../../../public/rec_w_1.svg";

interface Slide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: any;
    swipericonHead: any;
}

const slides: Slide[] = [
    {
        id: 1,
        icon: <img src={swipericon1} alt="" />,
        swipericonHead: <img src={swipericonHead1} alt="" />,
        title: "Services & Solutions",
        subtitle: "INDUSTRIES",
        description:
            "Kanda Idea has considerable expertise in many industries and also has developed its sector of abilities field by field and it has been experienced in a wide range of territory. Kanda Idea has started its journey from Oil and Gas and Petrochemical industry and continued in GIS (Geospatial Information System) and Geomatics and now it is cruising in the Maritime and Ship-Tracking area."
    },
    {
        id: 2,
        icon: <img src={swipericon2} alt="" />,
        swipericonHead: <img src={swipericonHead2} alt="" />,
        title: "RESEARCH & DEVELOPMENT",
        subtitle: "SERVICES & SOLUTIONS",
        description:
            "Over 15 years of experience in engineering services consultancy and with the taking advantage of expert human resources, Kanda Idea provides a wide range of services and solutions and become one of the leading consultants in the region."
    },
    {
        id: 3,
        icon: <img src={swipericon3} alt="" />,
        swipericonHead: <img src={swipericonHead3} alt="" />,
        title: "Industries",
        subtitle: "RESEARCH & DEVELOPMENT",
        description:
            "In this contemporary age, science and technology are changing magnificently second by second and being associated with it, is one of the most necessary characteristics that all companies should follow. Kanda Idea put adequate time and effort into researching cutting-edge science and developing the latest technology by several laboratories."
    },
];

const Swiper = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0);
    const [isFading, setIsFading] = useState<boolean>(false);
    const timer = useRef<any>(null);

    const handleSlideChange = () => {
        setIsFading(true);
        setTimeout(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
            setIsFading(false);
        }, 400);
    };

    const resetTimer = () => {
        if (timer.current) {
            clearInterval(timer.current);
        }
        timer.current = setInterval(handleSlideChange, 5000);
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timer.current) clearInterval(timer.current);
        };
    }, []);

    return (
        <div className="bgImageHero py-10">
            <Navbar />
            <div className="relative flex flex-col h-screen w-full overflow-hidden">
                <div className="mb-10 relative z-10 w-full h-full flex justify-start items-center px-12 text-white">
                    <img src={icon} alt="" className="w-2/12" />
                    <h1 className="text-3xl font-bold -ml-24">
                        CREATIVE
                        <br /> ENGINEERING
                        <br /> EXPERIENCE
                    </h1>
                </div>

                <div className="h-[2px] w-full bg-white absolute lg:top-[55%] xl:top-[60%] 2xl:top-[65%] right-0"></div>
                <div className="flex px-20">
                    <div
                        className={`relative z-10 w-full h-full flex flex-col justify-center items-start text-white transition-transform transition-opacity duration-300`}
                    >
                        <h1 className={`text-3xl flex items-center font-light uppercase flex gap-5 mb-6 strokeTextSwiper transition duration-300 ${isFading ? "translate-y-8 opacity-0" : "opacity-100"
                            }`}>
                            {slides[activeSlide].swipericonHead} {slides[activeSlide].title}
                        </h1>
                        <h2 className={`text-3xl flex items-center font-light mt-2 uppercase flex gap-5 transition duration-300 ${isFading ? "translate-x-8 opacity-0" : "opacity-100"}`}>
                            {slides[activeSlide].icon} {slides[activeSlide].subtitle}
                        </h2>
                        <p className={`text-lg mt-4 w-3/4 h-[150px] transition duration-300 ${isFading ? "translate-x-8 opacity-0" : "opacity-100"}`}>
                            {slides[activeSlide].description}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center space-y-4 z-10 absolute lg:top-[48%] xl:top-[54%] 2xl:top-[59%] right-[10%]">
                        <button className="w-12 h-10 buttonNumber flex items-center justify-center buttonSwiper transition-all duration-300">
                            {slides[activeSlide].id === 1 ? (
                                <img alt="" src={current1} />
                            ) : slides[activeSlide].id === 2 ? (
                                <img
                                    alt=""
                                    src={
                                        "https://kandaidea.com/Content/images/slider/rec_w_2.svg"
                                    }
                                />
                            ) : (
                                <img
                                    alt=""
                                    src={
                                        "https://kandaidea.com/Content/images/slider/rec_w_3.svg"
                                    }
                                />
                            )}
                        </button>
                        <button className="w-9 h-9 buttonSwiper flex items-center justify-center bg-white transition-all duration-300">
                            <img alt="" src={threeicon} />
                        </button>
                        <button
                            onClick={() => {
                                handleSlideChange();
                                resetTimer();
                            }}
                            className="w-12 h-10 flex items-center justify-center transition-all duration-300"
                        >
                            <img alt="" src={next} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Swiper;
