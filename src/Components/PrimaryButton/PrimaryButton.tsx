import React from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";

//define types
interface PrimaryButtonProps {
    name: String;
    onClick?: () => void;
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ name, onClick }) => {
    return (
        <button className='flex items-center justify-center bg-green-500 rounded-full text-white px-4 py-2 my-2 group'
            onClick={onClick}
        >
            <div className='pr-2'>{name}</div>
            <IoArrowForwardCircleOutline
                className="transition ease-in-out duration-300 group-hover:translate-x-1 "
                style={{ fontSize: '40px' }}
            />
        </button>
    )
}

export default PrimaryButton