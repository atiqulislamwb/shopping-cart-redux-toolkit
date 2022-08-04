import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: null,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { showNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
