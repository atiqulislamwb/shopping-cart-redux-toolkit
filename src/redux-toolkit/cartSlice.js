import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalPrice += newItem.price;
      } else {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          quantity: 1,
          totalPrice: newItem.price,
          img: newItem.img,
        });

        state.totalQuantity++;
      }
    },
    removeAllFromCart: (state) => {
      // state.cartItems = [];
      return { cartItems: [] };
    },
    removeItems: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    decreaseItem: (state, action) => {
      const id = action.payload;
      const existingProduct = state.cartItems.find((item) => item.id === id);
      if (existingProduct.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== existingProduct.id
        );
        state.totalQuantity--;
      } else {
        existingProduct.quantity--;
        existingProduct.totalPrice -= existingProduct.price;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeAllFromCart, decreaseItem, removeItems } =
  cartSlice.actions;

export default cartSlice.reducer;
