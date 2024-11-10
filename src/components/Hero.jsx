import React from 'react'
import HeroImage from './../assets/heroImage.png'

const Hero = () => {
    return (
        <section className='max-w-7xl mx-auto py-12 flex flex-col justify-center items-center'>
            <img
                src={HeroImage}
                alt="all_for_one"
                height={300}
                width={200}
                className=''
            />
            <div className='flex flex-col justify-center items-center'>
                <h2 className="text-5xl font-bold text-jade-200 p-2">One <span className='text-jade-950'>for</span> All</h2>
                <span className='text-md font-light text-jade-100'>Unlock your hidden potential. Power awaits!</span>
            </div>
        </section>
    )
}

export default Hero