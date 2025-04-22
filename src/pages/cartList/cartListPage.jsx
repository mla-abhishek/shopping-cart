import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context/shoppingCartContext'
import { useNavigate } from 'react-router-dom';
import SingleCartItem from '../../components/singleCartItem/singleCartItem';

const cartListPage = () => {

  const {cartList} = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  return (
    <div className='mx-w-5xl mx-auto mx-md:mx-w-xl p-4'>
      <h1 className='text-2xl font-bold text-gray-800 text-center'>My Cart Items</h1>
      <div className='grid md:grid-cols-3 gap-8 mt-12'>
        <div className='md:col-span-2 space-y-4'>
          {
            cartList?.length ? 
            cartList.map((cartItem)=><SingleCartItem key={cartItem.id} cartItem={cartItem}/>): <h1 className='text-center text-2xl font-bold text-gray-800'>Cart is empty</h1>
          }
        </div>
        <div className='bg-gray-100 p-4 rounded-sm h-max'>
          <h3 className='text-xl font-bold text-gray-800 border-b pb-2 border-gray-200'>Order Summary</h3>
          <ul className='text-sm text-gray-600 space-y-2'>
            <p className='flex flex-wrap gap-2 font-bold text-sm'>Total <span>$ {cartList.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}</span></p>
          </ul>
          <div className='mt-4 space-y-2'>
          <button disabled={cartList.length === 0} className='w-full py-2 bg-gray-800 text-white text-sm font-medium rounded-sm disabled:opacity-40'>Check Out</button>
          <button onClick={() => navigate('/product-list')} className='w-full py-2 bg-gray-800 text-white text-sm font-medium rounded-sm'>Continue Shppoing</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cartListPage