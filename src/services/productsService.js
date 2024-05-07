import axios from 'axios'

class ProductsService{
     static getAllProducts = () => axios.get('/products')
     static getAllCategory = () => axios.get('/products/categories')
     static getSingleProduct = (productId) => axios.get(`/products/${productId}`)
}

export default ProductsService