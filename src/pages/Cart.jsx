import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TbMoodEmpty } from "react-icons/tb";
import CartItem from "../components/CartItem";
import { removeAllFromCart } from "../redux-toolkit/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((store) => store.cart);
  console.log(cartItems);
  let cartTotalPrice = 0;
  cartItems.forEach((cartItem) => {
    cartTotalPrice += cartItem.totalPrice;
  });

  const dispatch = useDispatch();
  return (
    <div className="items-center justify-center w-screen h-screen px-28 py-11">
      {cartItems.length > 0 ? (
        <section className="flex-col inline-block box-border justify-center w-full p-32">
          <div className="">
            {cartItems?.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => dispatch(removeAllFromCart())}
              className="text-red-600 py-2 tracking-widest font-semibold px-10 text-center mt-10 text-xl bg-white border-2 border-red-600 rounded-md uppercase"
            >
              Clear Cart
            </button>
          </div>
          <hr className="h-xl mt-6" />
          <div>
            <div className="flex items-center justify-between text-black gap-72">
              <p className="text-xl">Total</p>
              <p className="text-xl text-slate-700">${cartTotalPrice}</p>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex justify-center font-mono items-center tracking-widest text-[#261a33] font-bold -mt-32 text-4xl w-screen h-screen ">
          <h1>Your Cart Is Empty</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
