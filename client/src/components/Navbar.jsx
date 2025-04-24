// components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleMenuBar = () => {
        setIsActive(() => !isActive);
    }

    return (
        <nav className="fixed w-full bg-white dark:bg-gray-800 shadow z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Portfolio</h1>
                <ul className={`md:flex md:justify-end mt-70 py-4 md:py-0 md:mt-0 md:text-xl text-2xl space-x-6 md:space-y-0 space-y-8 z-[-1] md:z-auto md:static absolute w-full left-0 bg-white dark:bg-gray-800 md:visible ${isActive ? "" : "hidden"}`} >
                    {
                        ['Home', 'About', 'Projects', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="mx-4 my-6 md:my-0 hover:text-blue-500 transition">
                                    {item}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <span className="text-3xl md:hidden cursor-pointer block" onClick={toggleMenuBar}>
                    <ion-icon name="menu"></ion-icon>
                </span>
            </div>
        </nav >
    );
};

export default Navbar;
