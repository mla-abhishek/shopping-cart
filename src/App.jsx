import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import ProductListPage from "./pages/productList/productListPage"
import ProductDetailsPage from "./pages/productDetails/productDetailsPage"
import CartListPage from "./pages/cartList/cartListPage"
import PageRouter from "./components/pageRouter/pageRouter"

function App() {

  return (
    <Fragment>
      {/* <Routes>
        <Route path="/product-list" element={<ProductListPage/>}/>
        <Route path="/product-details/:id" element={<ProductDetailsPage/>}/>
        <Route path="/cart" element={<CartListPage/>}/>
      </Routes> */}
      <PageRouter />
    </Fragment>
  )
}

export default App
