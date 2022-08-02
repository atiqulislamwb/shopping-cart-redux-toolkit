import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux-toolkit/cartSlice.js";
const ProductCard = ({ product }) => {
  const { id, name, img, price } = product;
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(
      addToCart({
        id,
        img,
        price,
        name,
      })
    );
  };
  return (
    <div className="rounded-md flex-col w-30 h-30 inline-block bg-[#261a33] shadow-lg  p-3">
      <img src={img} alt="product" className="w-full h-full " />
      <h1 className="text-xl">{name}</h1>
      <h3 className="text-xl text-white ">Price: ${price}</h3>
      <button
        className="py-2 rounded-md px-4 text-lg ml-2 mb-2 bg-cyan-500 hover:bg-cyan-800"
        onClick={handleCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
