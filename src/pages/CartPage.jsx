import React from 'react'
import { useSelector } from 'react-redux'
import CardItemComponent from '../compoonents/CartItemComponent'
function CartPage() {

  const {cart,totalPrice} = useSelector(state=>state.cartStore)
  console.log(cart);



  return <div>
    {cart.length> 0 ? <div className='mt-5 lg:mt-10'>
      <div className='container mx-auto flex flex-col lg:flex-row gap-2'>
      {/* Left side */}
      <div className='w-full lg:w-[70%]'>
        <div className='grid grid-cols-4 bg-lightBlue h-[60px] place-items-center'>
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>SubTotal</p>
        </div>
        {/* body content */}
        {cart.map((item,index)=>{
          return <CardItemComponent key={index} item={item}/>
        })}
      </div>
      {/* right side */}
      <div>Total price:</div>
      </div>
    </div>:<div>Nema Proizvoda</div>}
  </div>

  
}

export default CartPage