import React from 'react'
import Card from './Card'
import GravityDriftImage from './../assets/GravityDriftImage.png'
import FrostFlareImage from './../assets/FrostFlareImage.png'
import BlastForgeImage from './../assets/BlastForgeImage.png'


const cards = [
    { "title": "Gravity Drift", "description": "Defy the laws of physics and lighten any object or person at will. Perfect for lifting, floating, or simply easing the load!", "image": GravityDriftImage },
    { "title": "Frostflare", "description": "Control both fire and ice with precision – switch from icy cool to blazing heat, adapting to any challenge that comes your way!", "image": FrostFlareImage },
    { "title": "Blastforge", "description": "Harness explosive energy in your hands. Create bursts of power for thrilling effects, whether it’s for a grand entrance or a quick getaway!", "image": BlastForgeImage },
]


const Content = () => {
    return (
        <section className='md:mx-5 py-8 px-6 rounded-lg bg-jade-100 flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-3xl md:text-4xl font-extrabold text-jade-700 py-2'>Find your <span className='text-jade-950'>quirk</span></h2>
                <p className='text-sm md:text-md text-jade-900'>Are you ready to find your true power?</p>
                <p className='text-sm md:text-md text-jade-900'>Explore quirky and discover what makes you remarkable.</p>
            </div>
            <div className='p-4 space-y-4'>
                {
                    cards.map((card, index) => (
                        <Card key={index} title={card.title} description={card.description} image={card.image} />
                    ))
                }
            </div>
        </section>
    )
}

export default Content