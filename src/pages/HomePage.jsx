import React, { useEffect } from 'react'
import ProductsService from '../services/productsService'
import { useDispatch, useSelector } from 'react-redux'
import { saveAllProductsAction } from '../store/productSlice'
import CardProductComponent from '../compoonents/CardProductComponent'

function HomePage() {
  const {allProducts} = useSelector(state=>state.productStore)
  const dispatch = useDispatch()
  useEffect(()=>{
    ProductsService.getAllProducts()
    .then(res=>dispatch(saveAllProductsAction(res.data.products)))
    .catch(err=>console.log(err))
  },[])
  
  return (
    <main className='container mx-auto'>
     
     <div className='flex flex-wrap items-center justify-center mt-10 gap-8'>
     {allProducts.map((product)=>{
        return <CardProductComponent product={product} id={product.id} key={product.id}/>
      })}
     </div>
    </main>
  )
}

export default HomePage