import React, { Fragment, useContext } from 'react'
import { ShoppingCartContext } from '../../context/shoppingCartContext'

const SingleCartItem = ({cartItem}) => {
    const {handleRemoveItemFromCart, handleAddToCart} = useContext(ShoppingCartContext);
  return (
    <Fragment>
        <div className='grid grid-cols-3 items-start gap-4'>
        <div className='col-span-2 flex items-start gap-4'>
            <div className='w-28 h-28 bg-gray-100 max-sm:w-20 max-sm:h-20 shrink-0 p-1 rounded-sm'>
                <img src={cartItem.thumbnail} className='w-full h-full object-contain object-center rounded-sm' alt="" />
            </div>
            <div>
                <h3 className='text-sm font-medium text-gray-900'>{cartItem.title}</h3>
                <button onClick={() => handleRemoveItemFromCart(cartItem, true)} className='text-xs font-medium text-gray-600 text-white bg-[#333] hover:border-[#333] mt-1 border border-[#333] rounded-sm px-2 py-1'>Remove</button>
            </div>
        </div>
        <div className='ml-auto'>
            <h3 className='text-sm font-medium text-gray-900'>$ {cartItem.totalPrice.toFixed(2)}</h3>
            <p className='mt-2 mb-3 font-bold text-xs text-gray-600'>Quantity: {cartItem.quantity}</p>
            <div className='flex items-center gap-2'>
                <button onClick={()=>handleAddToCart(cartItem)} className='text-xs font-medium text-gray-600 hover:border-[#333] bg-gray-300 mt-1 border border-[#333] rounded-sm px-2 py-1'>+</button>
                <button onClick={() => handleRemoveItemFromCart(cartItem, false)} className='text-xs font-medium text-gray-600 hover:border-[#333] mt-1 border border-[#333] bg-gray-300 rounded-sm px-2 py-1 disabled:bg-gray-100' disabled={cartItem.quantity === 1}>-</button>
            </div>
        </div>
    </div>
    <hr className='border-gray-500'/>
    </Fragment>
  )
}

export default SingleCartItem