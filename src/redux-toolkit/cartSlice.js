import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://course-api.com/react-useReducer-cart-project";
const initialState = {
  cartItems: [],
  totalQuantity: 0,
  amount: 0,
  changed: false,
  isloading: false,
};

// export const getCartItems = createAsyncThunk("cart/cartItems", async () => {
//   return await fetch(url)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// });

export const getCartItems = createAsyncThunk(
  "cart/cartItems",
  async (_, thunkAPI) => {
    try {
      console.log(thunkAPI.getState());
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("There was something wrong here");
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isloading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isloading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isloading = false;
    },
  },
  reducers: {
    replaceData: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.cartItems = action.payload.cartItems;
    },

    addToCart: (state, action) => {
      // state.changed = true;
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
      // state.changed = true;
      state.cartItems = [];
    },
    removeItems: (state, action) => {
      // state.changed = true;
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
    // calculateTotals: (state) => {
    //   let amount = 0;
    //   let total = 0;
    //   state.cartItems.forEach((item) => {
    //     amount += item.amount;
    //     total += item.amount * item.price;
    //   });
    //   state.amount = amount;
    //   state.total = total;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  replaceData,
  removeAllFromCart,
  decreaseItem,
  removeItems,
} = cartSlice.actions;

export default cartSlice.reducer;
