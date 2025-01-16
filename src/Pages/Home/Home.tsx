import React from 'react'
import bgImg from '../../assets/hero2.jpg'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton'
import LineChart from '../../Components/LineChart/Linechart'
import tailorImg from '../../assets/heroImg.png'
import ShopCard from '../../Components/ShopCard/ShopCard'
import heroVid from '../../assets/heroVid.mp4';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const data = [100, 200, 400, 250, 300]

    const handleShopNav = () => {
        navigate('/Shop');
    }
    return (
        <div className='grid grid-cols-[40%,60%] w-full h-screen bg-cover pt-20'
            style={{ backgroundImage: `url(${bgImg})` }}
            >
            {/* <video
                className="absolute top-[5rem] left-0 w-full h-full object-cover z-[-1]"
                autoPlay
                muted
                loop
            >
                <source src={heroVid} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <div className='grid grid-cols-1 divide-y bg-white items-center m-4 rounded-xl p-4 backdrop-blur'>
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
            <div className='flex flex-col justify-between p-4 h-screen'>
                <div className='text-black text-xl uppercase '>
                    A Fresh Look Without a Fresh Scar on the Earth.
                </div>
                <div className="flex flex-wrap gap-4 justify-center items-start bg-white backdrop-blur rounded-xl p-4 h-[40%] w-full">
                    <ShopCard name='White top' />
                    <ShopCard name='White top' />
                    <ShopCard name='White top' />
                </div>
            </div>
        </div>
    )
}

export default Home