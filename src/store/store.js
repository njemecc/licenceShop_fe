import { configureStore } from "@reduxjs/toolkit";

//slices
import { cartSlice } from "./slices/cart-slice";
import { adminSlice } from "./slices/admin-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    admin: adminSlice.reducer,
  },
});

export default store;
