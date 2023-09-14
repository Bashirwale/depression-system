import { configureStore } from "@reduxjs/toolkit";

import questionReducer from "./Slice/questionSlice"; // Import your question slice

const store = configureStore({
  reducer: {
    question: questionReducer, // Add your question slice to the root reducer
    // Add other reducers here
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
