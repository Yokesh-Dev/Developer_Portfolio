import React from 'react'
import { words } from '../constants'
import Button from '../components/button'
import HeroExperience from '../components/heroModels/HeroExperience'



function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="./images/bg.png" alt='Background' />
        </div>

        <div className='hero-layout'>
            {/* /LEFT IS THE HERO CONTENT */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1> Shaping 
                         <span className='slide'>
                            <span className='wrapper'>
                                {words.map((word) => (
                                    <span key= {word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                        <img 
                                        src={word.imgPath}
                                        alt='Person'
                                        className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                                        />
                                    <span>{word.text}</span>
                                    </span>
                                ))}
                            </span>
                         </span>
                        </h1>

                        <h1>Into real projects</h1>
                        <h1>that deliver results</h1>
                    </div>
                    <p className='text-white-50 md:text-xl relative z-10 pointer-events-none' >
                            Hi I'm Yokesh , a developer based in India with passion for code.
                        </p>
                        <Button
                        className='md:w-80 md:h-16 h-12 w-60 ' //Checkout::::
                        id="button"
                        text="See my work"
                        />

                </div>
            </header>
            {/* RIGHT SIDE WE DISPLAY THE 3D ANIMATION */}
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience />
                
                </div>
            </figure>

        </div>
    </section>
  )
}

export default Hero ;