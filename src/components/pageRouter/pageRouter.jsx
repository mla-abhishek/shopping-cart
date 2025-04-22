import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from '../../pages/homePage/homePage'
import ProductListPage from '../../pages/productList/productListPage'
import ProductDetailsPage from '../../pages/productDetails/productDetailsPage'
import CartListPage from "../../pages/cartList/cartListPage"
import MainLayout from '../mainLayout/mainLayout'

const CustomPageRouter = () => {
    const router = useRoutes([
        {
            path: '/',
            element: < MainLayout />,
            children: [
                {
                    path: '/',
                    element: < HomePage />
                },
                {
                    path: '/product-list',
                    element: <ProductListPage/>
                },
                {
                    path: '/product-details/:id',
                    element: <ProductDetailsPage />
                },
                {
                    path: '/cart',
                    element: <CartListPage />
                }
            ]
        }
    ])
    return router
}

const PageRouter = () => {

  return (
    <CustomPageRouter/>
  )
}

export default PageRouter