import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../../context/shoppingCartContext';

const ProductDetailsPage = () => {

  const {id} = useParams();
  const {detailsOfProduct, setDetailsOfProduct, loading, setLoading, handleAddToCart, cartList} = useContext(ShoppingCartContext);

  async function fetchProductDetails() {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();

    if(data) {
      setDetailsOfProduct(data);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // console.log(detailsOfProduct);

  if(loading) return <h1>Loading...!</h1>;

  return (
    <div className='p-6 lg:max-w-7xl max-w-4xl mx-auto'>
      <div className='grid grid-cols-1 items-center lg:grid-cols-5 gap-12 shadow-sm p-6'>
        <div className='lg:col-span-3 w-full h-full lg:sticky top-0 text-center'>
          <div className='px-4 py-10 rounded-xl shadow-lg relative'>
            <img src={detailsOfProduct?.thumbnail} className='w-4/5 rounded object-cover' alt={detailsOfProduct?.title} />
          </div>
          <div className='mt-6 flex justify-center gap-4 flex-wrap mx-auto'>
            {
              detailsOfProduct?.images.length?
              detailsOfProduct?.images.map((imageItem)=><div className='rounded-xl p-4 shadow-md' key={imageItem}>
                <img src={imageItem} className='w-24 cursor-pointer' alt={detailsOfProduct?.title} />
              </div>) : null
            }
          </div>
        </div>
        <div className='lg:col-span-2'>
          <h2 className='text-2xl font-bold text-[#333]'>{detailsOfProduct?.title}</h2>
          <div className='flex flex-wrap gap-4 mt-4'>
            <p className='text-xl text-gray-600 font-semibold'>$ {detailsOfProduct?.price}</p>
          </div>
          <div>
            <button onClick={()=>handleAddToCart(detailsOfProduct)} className='min-w-[200px] bg-black text-black rounded-md px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded mt-4 hover:bg-[#333] hover:text-white hover:border-[#333] disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-400' disabled={!detailsOfProduct || cartList.some((item) => item.id === detailsOfProduct.id)}>Add to Cart</button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage