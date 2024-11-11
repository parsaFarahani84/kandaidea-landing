import { useState } from 'react';
import menuIcon from '../../../public/menu_button.svg';
import closeIcon from '../../../public/cross_w.svg';
import logo from '../../../public/kandaidea-svg.svg';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-transparent text-white p-5 relative">
            {/* Static Navbar Content */}
            <div className="w-11/12 mx-auto flex justify-between items-center">
                <div className="w-1/5">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="flex gap-12 text-xl items-center">
                    <h1>Choose Language :</h1>
                    <div>
                        <a>En/</a>
                        <a>Fa</a>
                    </div>
                    <div className="cursor-pointer">
                        {isMenuOpen ? (
                            <img src={closeIcon} alt="Close Icon" className="w-11/12" />
                        ) : (
                            <img src={menuIcon} alt="Menu Icon" className="pr-2" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
