import { configureStore } from "@reduxjs/toolkit";
import countSlide from "../Counter/counter.reducer";
const store = configureStore({
  reducer: {
    counts: countSlide,
  },
});

export default store;
