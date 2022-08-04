import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import notificationReducer from "./notificationSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    notification: notificationReducer,
  },
});
