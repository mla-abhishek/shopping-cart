import React, { useContext, useRef, useState } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import ProductItem from '../productItem/productItem';

const ProductCarousel = () => {
  const carouselRef = useRef(null);
  const { listOfProducts, loading } = useContext(ShoppingCartContext);
  const [index, setIndex] = useState(0);

  const visibleCards = 4;

  const next = () => {
    if (carouselRef.current && listOfProducts.length > visibleCards) {
      const maxIndex = listOfProducts.length - visibleCards;
      setIndex((prev) => {
        const newIndex = prev >= maxIndex ? 0 : prev + 1;
        carouselRef.current.style.transform = `translateX(-${newIndex * (100 / listOfProducts.length)}%)`;
        return newIndex;
      });
    }
  };

  const previous = () => {
    if (carouselRef.current && listOfProducts.length > visibleCards) {
      const maxIndex = listOfProducts.length - visibleCards;
      setIndex((prev) => {
        const newIndex = prev <= 0 ? maxIndex : prev - 1;
        carouselRef.current.style.transform = `translateX(-${newIndex * (100 / listOfProducts.length)}%)`;
        return newIndex;
      });
    }
  };

  if (loading) return <h1>Loading...!</h1>;

  return (
    <div className="relative w-full overflow-hidden">
      <div className='flex mt-4 ml-4'>
      <div className="top-1/2 left-4 transform mr-2">
        <button onClick={previous} className="shadow p-2">
          ⬅
        </button>
      </div>
      <div className="top-1/2 right-4 transform">
        <button onClick={next} className="shadow p-2">
          ➡
        </button>
      </div>
      </div>
      <div
        id="carousel"
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-out"
        style={{
          width: `${listOfProducts.length * 25}%`,
        }}
      >
        {listOfProducts.length > 0 ? (
          listOfProducts.map((product) => (
            <div key={product.id} className="w-1/4 p-4">
              <div className="bg-white shadow-lg h-full">
                <ProductItem product={product} />
              </div>
            </div>
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>
    </div>
  );
};

export default ProductCarousel;
