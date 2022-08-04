import React from "react";
import { BsChevronCompactUp, BsChevronCompactDown } from "react-icons/bs";
import {
  addToCart,
  decreaseItem,
  removeItems,
} from "../redux-toolkit/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleCart = () => {
    dispatch(
      addToCart({
        id: item.id,
        img: item.img,
        price: item.price,
        name: item.name,
      })
    );
  };
  return (
    <div className="flex items-center justify-between text-black mt-4 ">
      <div className="flex items-center justify-center">
        <div className="w-14 h-16">
          <img
            src={item.img}
            className="w-full h-full object-fill"
            alt="cartItems"
          />
        </div>
        <div className="text-left ml-7">
          <h1 className="text-slate-800 text-base font-mono">{item.name}</h1>
          <p className="text-slate-500 font-semibold"> ${item.totalPrice}</p>
          <button
            onClick={() => dispatch(removeItems(item.id))}
            className="text-purple-500 text-lg tracking-widest  "
          >
            remove
          </button>
        </div>
      </div>

      <div className="flex flex-col ">
        <button onClick={handleCart} className="text-xl">
          <BsChevronCompactUp />
        </button>
        <button className="text-xl">{item.quantity}</button>
        <button
          onClick={() => dispatch(decreaseItem(item.id))}
          className="text-xl"
        >
          <BsChevronCompactDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
