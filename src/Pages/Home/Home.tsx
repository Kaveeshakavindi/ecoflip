import React from 'react'
import bgImg from '../../assets/heroBg4.jpeg'

const Home: React.FC = () => {
    return (
        <div className='grid grid-cols-[40%,45%,15%] w-full h-screen bg-cover bg-center'
            style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='items-center backdrop-blur-md bg-white/30 m-4 rounded-xl p-4 text-5xl text-black' >
            Reclaiming Style, Restoring Earth-<span className='text-emerald-600'>Thrift.</span>
            </div>
            <div className=''>hey</div>
            <div className='items-center backdrop-blur-md bg-white/30 m-4 rounded-xl p-4 text-5xl text-white' >
            </div>
        </div>
    )
}

export default Home