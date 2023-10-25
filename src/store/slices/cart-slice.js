import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  myCartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart(state, payload) {
      state.myCartItems = [...state.myCartItems, payload.payload];
    },
    removeFromCart(state, payload) {
      const newCartItems = state.myCartItems.filter(
        (item) => item.name !== payload.payload
      );

      state.myCartItems = newCartItems;
    },
  },
});

export const cartActions = cartSlice.actions;
