import { createSlice } from "@reduxjs/toolkit";
import { InterfaceUserState } from "../Types";

const initialState: InterfaceUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;