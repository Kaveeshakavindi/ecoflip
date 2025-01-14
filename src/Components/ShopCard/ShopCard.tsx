import React, { useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import sample from '../../assets/sample.png';
import { IoIosStar } from "react-icons/io";
import SecondaryButton from '../SecondaryButton/SecondaryButton';

interface ShopCardProps {
    name: string,
}

const ShopCard: React.FC<ShopCardProps> = ({ name }) => {
    const [isLiked, setIsLiked] = useState(false);

    const toggleHeart = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div className="bg-white flex-grow flex-shrink basis-[30%] h-full p-4 rounded-lg">
            <div className='text-lg cursor-pointer' onClick={toggleHeart}>
                {isLiked ? <IoMdHeart className="text-green-500" /> : <IoMdHeartEmpty />}
            </div>

            <div className="overflow-hidden rounded-lg h-[60%]">
                <img
                    src={sample}
                    alt="shop"
                    className="w-full h-full object-contain"
                />
            </div>

            <div className='font-semibold text-sm p-1'>
                {name}
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-sm'>
                    $ 15.00
                </div>
                <div className='text-xs flex justify-end align-center'>
                    <IoIosStar className='text-amber-400' /> 4.5
                </div>
            </div>
            <div><SecondaryButton/></div>
        </div>
    )
}

export default ShopCard