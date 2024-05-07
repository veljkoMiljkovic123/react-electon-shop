import React from 'react'
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material';
function CardProductComponent({product,id}) {
  return (
    <div className='w-[300px] h-full border border-mainBlue rounded-lg flex flex-col items-center gap-3'>
        <div className='relative w-full'>
        <img src={product.thumbnail} alt={product.title} className='w-full h-[200px] rounded-t-lg object-cover'/>
        <div className='absolute bg-black/50 inset-0 hover:bg-transparent rounded-t-lg'></div>
        </div>
        <h2 className='font-bold text-xl text-mainBlue'>{product.title}</h2>
        <span className='text-mainYellow'>${product.price}</span>

        {/* rating === zvezdice */}

        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />

        <Link to={`/singleProduct/${product.id}`} className='bg-mainBlue text-whiteColor px-4 py-2 rounded-lg mb-3 hover:bg-mainYellow transition-all'>View Detail</Link>
    </div>
  )
}

export default CardProductComponent