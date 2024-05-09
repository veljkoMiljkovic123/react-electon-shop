import React from 'react'

function CartItemComponent({item}) {




  return (
    <div className='grid grid-cols-4 place-items-center mt-5'>
        <div className='flex gap-2 items-center'>
            {/* img */}
            <img src={item.thumbnail} className='hidden lg:block w-[100px] h-[100px] object-cover rounded-2xl' alt="" />

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
            <button>+</button>
            <span>{item.count}</span>
            <button>-</button>
        </div>
        <div>
            <p>${parseInt(item.price)*parseInt(item.count)}</p>
        </div>
    </div>
  )
}

export default CartItemComponent