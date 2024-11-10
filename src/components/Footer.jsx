import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col justify-center items-center text-jade-50 p-12 gap-2'>
            <h2 className='font-semibold text-xl'>why quirky?</h2>
            <p className='max-w-3xl text-center font-light text-sm'>Because we know there's a hero in everyone. At Quirky, we offer a range of abilities that cater to every personality,
                from the courageous to the quirky. Ready to take on the world? Your power awaits.</p>
            <p className="text-sm">
                &copy; {new Date().getFullYear()} One For All. All rights
                reserved.
            </p>
        </footer>
    )
}

export default Footer