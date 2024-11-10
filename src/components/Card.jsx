import React from 'react'

const Card = ({ image, title, description }) => {
    return (
        <div className='group flex flex-col md:flex-row gap-4 p-8 md:pl-4 md:pr-8 md:py-4 bg-jade-300 rounded-2xl'>
            <img
                alt={title}
                src={image}
                height={240}
                width={240}
                className='m-auto md:m-0 group-hover:-translate-y-1 transition-all duration-300 object-contain'
            />
            <div className='flex flex-col gap-8 my-auto'>
                <div className='space-y-1'>
                    <h2 className='font-bold text-xl'>{title}</h2>
                    <p className='max-w-xl text-sm'>{description}</p>
                </div>
                <div className='flex justify-between md:justify-start items-center gap-4'>
                    <button className='px-4 py-1.5 bg-jade-800 rounded-md text-jade-100 font-light hover:bg-jade-900 transition-all duration-300'>
                        Equip Now
                    </button>
                    <button className='px-4 py-1.5 bg-jade-400 rounded-md text-jade-950 font-light hover:bg-jade-500 transition-all duration-300'>
                        Equip Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card