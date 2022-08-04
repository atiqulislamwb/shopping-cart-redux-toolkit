import React from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalQuantity = useSelector((store) => store.cart.totalQuantity);
  return (
    <div className="w-full flex items-center bg-[#261a33] justify-between px-10 py-10 ">
      <div className="text-5xl font-bold">
        <Link to="/">Redux Toolkit</Link>
        <p className="text-xl text-cyan-600 ">Shopping Cart</p>
      </div>
      <div className=" relative">
        <Link to="/cart" className="text-5xl">
          <BsCart2 />
          <div className="absolute -top-1 z-50 right-0 text-lg font-bold bg-cyan-400 rounded-full w-7 h-7 text-center">
            {totalQuantity}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
