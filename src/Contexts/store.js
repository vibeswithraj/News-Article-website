import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice.js";

const store = configureStore({
  reducer: articleReducer,
});
export default store;