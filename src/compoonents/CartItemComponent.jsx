import React from 'react'
import { ImCross } from "react-icons/im";
import { useDispatch } from 'react-redux';
import {deleteItemCardAction} from '../store/cartSlice'
function CartItemComponent({item}) {

const dispatch = useDispatch()

function removeItemHandler(){
    dispatch(deleteItemCardAction(item))
}

  return (
    <div className='grid grid-cols-4 place-items-center mt-5 relative border border-b-2'>
        <div className='flex gap-2 items-center'>
            {/* img */}
            <img src={item.thumbnail} className='hidden md:block w-[100px] h-[100px] object-cover rounded-2xl' alt="" />

            {/* property of product */}
            <div>
                <h2>{item.title}</h2>
                <p>{item.category}</p>
                <p>{item.stock}</p>
            </div>
        </div>
        <div>
            <p>${item.price}</p>
        </div>
        <div className='flex-center'>
            <button className='px-3 py-1 bg-slate-300'>+</button>
            <span className='px-3 py-1 bg-slate-300'>{item.count}</span>
            <button className='px-3 py-1 bg-slate-300'>-</button>
        </div>
        <div>
            {/* cart total */}
            <p>${item.cartTotal}</p>
        </div>
     
            {/* remove */}
            <ImCross color='red' className='absolute right-8' onClick={removeItemHandler}/>
        
    </div>
  )
}

export default CartItemComponent