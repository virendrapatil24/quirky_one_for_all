import React from 'react'

const Card = ({ image, title, description }) => {
    return (
        <div className='flex gap-4 pl-4 pr-8 py-4 bg-jade-300 rounded-2xl'>
            <img
                alt={title}
                src={image}
                height={240}
                width={240}
                className=''
            />
            <div className='flex flex-col gap-8 my-auto'>
                <div className='space-y-1'>
                    <h2 className='font-bold text-xl'>{title}</h2>
                    <p className='max-w-xl text-sm'>{description}</p>
                </div>
                <div className='flex items-center gap-4'>
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