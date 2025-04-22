import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import ProductItem from '../../components/productItem/productItem';

const ProductListPage = () => {

  const {listOfProducts, loading} = useContext(ShoppingCartContext);

  // console.log(listOfProducts);

  if(loading) return <h1>loading...!</h1>
  return (
    <section className='py-12 bg-white sm:py-16 lg:py-20'>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Product List</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 lg:gap-8 mt-8'>
              {
                listOfProducts && listOfProducts.length > 0 ? listOfProducts.map((product) => <ProductItem key={product.id} product={product}/>) : <h2>No products found</h2>
                }
            </div>
          </div>    
    </section>
  )
}

export default ProductListPage