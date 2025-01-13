import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import logo from '../../assets/logo2.png';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // List of navigation items
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Contact", href: "#" },
        { name: "About", href: "#" },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-50 text-#a3a3a3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-xl font-bold flex items-center">
                        <img src={logo} alt="logo" className="w-10 h-10 object-contain"/>
                        <a href="/" className="pl-4">
                            eco flip.
                        </a>
                    </div>

                    {/* Desktop Navbar */}
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <a
                            href={item.href}
                            className="block text-gray-500 hover:text-gray-700 rounded px-3 py-2 font-light text-sm"
                        >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>


                            {isOpen ? (
                                <IoCloseOutline style={{fontSize: '20px'}}/>
                            ) : (
                                <CiMenuFries style={{fontSize: '20px'}}/>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Collapsible Menu */}
            {isOpen && (
                <div id="mobile-menu" className="md:hidden bg-gray-100 absolute w-full h-full">
                    <ul className="space-y-2 px-4 py-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="block text-gray-500 hover:text-gray-700 rounded px-3 py-2 font-light text-sm"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
