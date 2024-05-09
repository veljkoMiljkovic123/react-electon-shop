import React from 'react'
import HeadingComponent from './HeadingComponent'
import { Link } from 'react-router-dom';
//logo
import logo from '../assets/logo.png'

//icons
import { CiUser,CiHeart,CiShoppingCart, CiShop   } from "react-icons/ci";
import CategoryComponent from './CategoryComponent';
import { useSelector } from 'react-redux';

function NavbarComponent() {

    const {totalProduct} = useSelector(state=>state.cartStore)
   

  return (
    <div className=''>
        <HeadingComponent />
        <nav className='bg-mainBlue h:full  lg:h-[100px] py-4'>
        <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between h-full gap-3'>
            <img src={logo} alt="logo" />

            <div className='bg-whiteColor rounded-[20px]'>
                <input type="text" placeholder='Search product' className='bg-transparent outline-none px-6 py-4'/>
                <button className='bg-mainYellow text-whiteColor px-6 py-4 rounded-e-[20px]'>Search</button>
            </div>

            <div>
                <ul className='flex-center gap-5 text-whiteColor'>
                    <li className='flex-center'>
                        <CiUser color='white' size={25}/>
                        <Link to={'/'}>SignIn</Link>
                    </li>
                    <li className='flex-center gap-2'>
                        <div className='flex-center'>
                        <CiHeart color='white' size={25}/>
                        <span className='badge'>0</span>
                        </div>
                        <Link to={'/'}>Favorite</Link>
                    </li>
                    <li className='flex-center gap-2'>
                        <div className='flex-center'>
                        <CiShoppingCart color='white' size={25}/>
                        <span className='badge'>{totalProduct}</span>
                        </div>
                        <Link to={'/cart'}>Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        <CategoryComponent />
    </div>
  )
}

export default NavbarComponent