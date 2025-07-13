import React, { useContext, useState, useEffect } from 'react';
import logo from './../assets/Images/logo.png';
import { HiMoon, HiSun, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { ThemeContext } from '../Context/ThemeContext';

function Header({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');
    const { theme, setTheme } = useContext(ThemeContext);

    // Trigger search on Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchQuery.trim());
        }
    };

    // Clear search
    const clearSearch = () => {
        setSearchQuery('');
        onSearch('');
    };

    return (
        <div className='flex items-center p-3'>
            <img src={logo} width={60} height={60} />

            <div className='flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center'>
                <HiOutlineMagnifyingGlass />
                <input
                    type='text'
                    placeholder='Search Games'
                    className='px-2 bg-transparent outline-none w-full'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    onClick={clearSearch}
                    className={`ml-2 text-sm ${
                        searchQuery ? 'text-blue-500' : 'text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!searchQuery}
                >
                    Clear
                </button>
            </div>

            <div>
                {theme === 'light' ? (
                    <HiMoon
                        className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                        onClick={() => {
                            setTheme('dark');
                            localStorage.setItem('theme', 'dark');
                        }}
                    />
                ) : (
                    <HiSun
                        className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer'
                        onClick={() => {
                            setTheme('light');
                            localStorage.setItem('theme', 'light');
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default Header;
