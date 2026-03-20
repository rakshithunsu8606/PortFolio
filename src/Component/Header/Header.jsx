import { Label } from '@headlessui/react';
import React, { useContext, useState } from 'react';
import logo from '../../assets/images/logo-black.webp'
import logoWhite from '../../assets/images/logo-white.webp'
import { FaRegMoon } from "react-icons/fa";
import { RiMenu5Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { ThemeContext } from '../../Context/ThemeContext';
import { FaSun } from "react-icons/fa";


function Header(props) {

    const ThemeData = useContext(ThemeContext)

    console.log(ThemeData);

    const [menu, setMenu] = useState(false)

    console.log(menu);

    const MenuItem = [
        { link: '#', Label: 'Home' },
        { link: '#', Label: 'About' },
        { link: '#', Label: 'Projects' },
        { link: '#', Label: 'Blog' },
        { link: '#', Label: 'Contact' }
    ]
    return (
        <header>
            <div className="container mx-auto py-10  flex justify-between">
                <div className="flex items-center space-x-8">
                    <a href="">
                        <img src={ThemeData.theme === 'light' ? logo : logoWhite} alt="" className='w-38' />
                    </a>


                    <nav>
                        <ul className='hidden lg:flex space-x-10 font-semibold dark:text-white'>
                            {
                                MenuItem.map((v) => (
                                    <li><a href={v.link}>{v.Label}</a></li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>

                <div className='flex items-center space-x-6'>
                    <button className='text-2xl' onClick={() => ThemeData.toggle(ThemeData.theme)}>
                        {
                            ThemeData.theme === 'light' ? <FaRegMoon /> : <FaSun className='dark:text-white' />
                        }

                    </button>
                    <a href="#" className='hidden lg:inline-block px-6 py-2 bg-black text-white rounded-4xl dark:bg-white dark:text-black'>
                        Let's Talk
                    </a>
                    <button className='inline-block lg:hidden text-2xl' onClick={() => setMenu(!menu)}>
                        <RiMenu5Fill className='dark:text-white'/>
                    </button>
                </div>

                <div className={` ${menu ? 'translate-x-0' : 'translate-x-full'} transition-duration duration-300 fixed top-0 right-0 w-70 h-full bg-red-200 p-6`}>
                    <button className='text-2xl' onClick={() => setMenu(!menu)}>
                        <RxCross2 />
                    </button>

                    <nav>
                        <ul className='my-6'>
                            {
                                MenuItem.map((v) => (
                                    <li className='my-3 font-semibold'><a href={v.link}>{v.Label}</a></li>
                                ))
                            }
                        </ul>
                    </nav>

                    <a href="#" className='inline-block lg:hidden px-6 py-2 rounded-4xl bg-black text-white  '>
                        Let's Talk
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;