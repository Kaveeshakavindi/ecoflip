import React from 'react'
import bgImg from '../../assets/hero.jpg'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton'
import LineChart from '../../Components/LineChart/Linechart'
import tailorImg from '../../assets/heroImg.png'

const Home: React.FC = () => {
    const navigate = useNavigate();
    const data = [100, 200, 400, 250, 300]

    const handleShopNav = () => {
        navigate('/Shop');
    }
    return (
        <div className='grid grid-cols-[40%,45%,15%] w-full h-screen bg-cover'
            style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='grid grid-cols-1 divide-y bg-white items-center m-4 rounded-xl p-4'>
                <div className='text-5xl text-black' >
                    Reclaiming Style, Restoring Earth-<span className='text-green-500'>Thrift.</span>
                </div>
                <div className="grid grid-cols-2 divide-x">
                    <div className="flex justify-center ">
                        <img src={tailorImg} alt='image' className='bg-cover' />
                    </div>
                    <div className="justify-center p-4">
                        <div className='font-medium'>Boosting sustainable clothing consumption through AI</div>
                        <PrimaryButton name="Browse Deals" onClick={handleShopNav} />
                    </div>
                </div>
                <div className='flex items-center justify-center' >
                    <LineChart name='Environmental Impact of Fast Fashion' data={data} />
                </div>
            </div>
            <div className='mx-1 my-4 p-4 grid grid-cols-1'>
                <div className='text-white text-xl uppercase '>
                    A Fresh Look Without a Fresh Scar on the Earth.
                </div>
                <div className='text-black'>
                    hi
                </div>
            </div>
            <div className='items-center  bg-white m-4 rounded-xl p-4 text-5xl text-black' >
            </div>
        </div>
    )
}

export default Home