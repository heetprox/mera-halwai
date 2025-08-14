import Image from 'next/image'
import React from 'react'

const Home6 = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center h-[50vh] md:h-[45vh] bg-black gap-5 relative'>
            <Image
                src="/banner.svg"
                alt="home3"
                width={500}
                height={500}
                className='w-full absolute leading-0 opacity-40 object-cover h-[100%]'
            />
            <div className="text-xl w-[70%] md:w-[40%]  z-40 sm:text-3xl  leading-snug md:text-4xl xl:text-5xl text-center pixel inline text-[#F1EDE2]"
            >
                Explore all features in Thirty seconds
            </div>

            <Image
                src="/play.svg"
                alt="home3"
                width={500}
                height={500}
                className='w-28 md:w-32 h-fit'
            />

        </div>
    )
}

export default Home6