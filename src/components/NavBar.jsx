import React from 'react'

const NavBar = () => {
    return (
        <div className='sticky top-0 left-0 z-50 border-solid border-b border-jade-700'>
            <nav className='flex justify-between items-center p-4 m-auto max-w-7xl'>
                <h1 className='font-black text-2xl text-jade-950 hover:cursor-pointer'>
                    quirky
                </h1>
                <div className='flex justify-between items-center gap-4'>
                    <span className='text-jade-950 hover:text-jade-900 hover:cursor-pointer transition-all duration-300'>quirks</span>
                    <button className='px-4 py-1.5 bg-jade-800 rounded-md text-jade-100 font-light hover:bg-jade-900 transition-all duration-300'>
                        Equip Now
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar