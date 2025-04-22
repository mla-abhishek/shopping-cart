import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const  [detailsOfProduct, setDetailsOfProduct] = useState(null);
    const [cartList, setCartList] = useState([]);
    const navigate = useNavigate();

    async function fetchProducts() {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        if(data && data.products){
            setListOfProducts(data.products);
        }
        setLoading(false);
    }

    function handleAddToCart(getProductDetails){
        // console.log(getProductDetails);
        const copyEistingList = [...cartList];
        const findIndexOfprodct = copyEistingList.findIndex((product) => product.id === getProductDetails.id);
        // console.log(findIndexOfprodct);
        if(findIndexOfprodct === -1){
            copyEistingList.push(
                {
                    ...getProductDetails,
                    quantity: 1,
                    totalPrice: getProductDetails?.price
                }
            );
        }else{
            copyEistingList[findIndexOfprodct] = {
                ...copyEistingList[findIndexOfprodct],
                quantity: copyEistingList[findIndexOfprodct].quantity + 1,
                totalPrice: (copyEistingList[findIndexOfprodct].quantity + 1) * copyEistingList[findIndexOfprodct].price 
            }
        }
        // console.log(copyEistingList);
        setCartList(copyEistingList);
        localStorage.setItem('cartList', JSON.stringify(copyEistingList));
        navigate('/cart');
    }


    function handleRemoveItemFromCart(getProductDetails, isAllProductRemoved){
        const copyEistingList = [...cartList];
        const findIndexOfprodct = copyEistingList.findIndex((product) => product.id === getProductDetails.id);

        if(isAllProductRemoved){
            copyEistingList.splice(findIndexOfprodct, 1);
            // setCartList(copyEistingList);
        }else{
            copyEistingList[findIndexOfprodct] = {
                ...copyEistingList[findIndexOfprodct],
                quantity: copyEistingList[findIndexOfprodct].quantity - 1,
                totalPrice: (copyEistingList[findIndexOfprodct].quantity - 1) * copyEistingList[findIndexOfprodct].price 
            }
        }
        localStorage.setItem('cartList', JSON.stringify(copyEistingList));
        setCartList(copyEistingList);
    }

    useEffect(()=>{
        fetchProducts();
        setCartList(JSON.parse(localStorage.getItem('cartList')) || []);
    },[]);

    // console.log(cartList);
return (
    <ShoppingCartContext.Provider 
    value={{
        listOfProducts, 
        loading, 
        setLoading, 
        detailsOfProduct, 
        setDetailsOfProduct, 
        handleAddToCart,
        cartList,
        handleRemoveItemFromCart
        }}>
        {children}
    </ShoppingCartContext.Provider>
)
}
export default ShoppingCartProvider;