import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification";
import { getCartItems } from "./redux-toolkit/cartSlice";
// import { sendCartDataToFirebase } from "./redux-toolkit/cartAction";
// import { fetchCartData } from "./redux-toolkit/cartAction";

function App() {
  // let isFirstRender = true;
  const dispatch = useDispatch();
  // const { cartItems, changed } = useSelector((store) => store.cart);
  const { notification } = useSelector((store) => store.notification);

  // useEffect(() => {
  //   dispatch(fetchCartData());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (isFirstRender) {
  //     isFirstRender = false;
  //     return;
  //   }
  //   if (cartItems.changed) {
  //     dispatch(sendCartDataToFirebase(cartItems));
  //   }
  // }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  });

  return (
    <div className=" bg-[#dafdff] text-white font-mono w-screen h-screen  ">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

if (false) {
  console.log("false");
}
