import { createSlice } from "@reduxjs/toolkit";

const adminInitialState = {
  activeMenu: true,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState: adminInitialState,
  reducers: {
    openMenu(state) {
      state.activeMenu = true;
    },
    closeMenu(state) {
      state.activeMenu = false;
    },
    toggleMenu(state) {
      state.activeMenu = !state.activeMenu;
    },
  },
});

export const adminActions = adminSlice.actions;
