import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice.js";

const store = configureStore({
  reducer: articleReducer,
});
export default store;
// export const dispatch = store.dispatch;
// export const rootState = store.getState;
