import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../context/shoppingCartContext';

const ProductItem = ({product}) => {

    const {handleAddToCart, cartList}=useContext(ShoppingCartContext);
    const navigate = useNavigate();

    const handlProductDetails = (id) => {
        navigate(`/product-details/${id}`);
    }
    
  return (
    <div className='relative group border border-gray-200 overflow-hidden p-6 cursor-pointer'>
        <div className='overflow-hidden aspect-w-1 aspect-h-1'>
            <img src={product?.thumbnail} alt={product?.title} className='w-full h-full object-center object-cover group-hover:scale-110 transition-all duration-300'/>
        </div>
        <div className='flex justify-between items-center mt-4 space-x-4'>
            <div className='text-sm font-medium text-gray-900 sm:text-sm text-xs md:text-base'>
                <p className='w-[120px] overflow-hidden text-ellipsis whitespace-nowrap'>{product?.title}</p>
            </div>
            <div className='text-right'>
                <p className='text-xs font-medium text-gray-900 sm:text-sm text-xs md:text-[14px]'>${product?.price}</p>
            </div>
        </div>
        <button onClick={()=>handlProductDetails(product?.id)} className='px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-semibold text-sm'>View Details</button>
        <button onClick={()=>handleAddToCart(product)} disabled={cartList.some((item) => item.id === product.id)} className='px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-semibold text-sm disabled:opacity-40'>Add to Cart</button>
    </div>
  )
}

export default ProductItem