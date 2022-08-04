import { showNotification } from "./notificationSlice";

import { replaceData } from "./cartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const response = await fetch(
        "https://redux-toolkit-shooping-cart-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json"
      );
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchHandler();
      dispatch(replaceData(cartData));
    } catch (error) {
      dispatch(
        showNotification({
          open: true,
          message: "Something went wrong",
          type: "error",
        })
      );
    }
  };
};

export const sendCartDataToFirebase = (cartItems) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        open: true,
        message: "Wait a moment please",
        type: "warning",
      })
    );

    const sendRequest = async () => {
      // Send state as Sending request

      const res = await fetch(
        "https://redux-toolkit-shooping-cart-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItems),
        }
      );
      const data = await res.json();
      dispatch(
        showNotification({
          open: true,
          message: "Successfully add to cart",
          type: "success",
        })
      );
    };

    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        showNotification({
          open: true,
          message: "Something went wrong",
          type: "error",
        })
      );
    }
  };
};
