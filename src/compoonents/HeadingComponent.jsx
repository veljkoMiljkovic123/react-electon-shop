import React from 'react'

//icons
import { CiDeliveryTruck } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
function HeadingComponent() {
  return (
    <div className='container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between h-[80px] gap-2'>
        <h3 className='text-blackTextColor'>Need help? Call us: (+98) 0234 456 789</h3>

        <div className='flex items-center gap-6'> 
            <div className='flex items-center gap-1'>
                <IoLocationOutline color='black' size={24}/>
                <span className='text-blackTextColor'>Our store</span>
            </div>
            <div className='flex items-center gap-1'>
                <CiDeliveryTruck color='black' size={24}/>
                <span className='text-blackTextColor'>Track your order</span>
            </div>
        </div>
    </div>
  )
}

export default HeadingComponent