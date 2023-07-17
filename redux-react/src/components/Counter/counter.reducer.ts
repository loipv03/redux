import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CountState {
  count: number;
}

const initState: CountState = {
  count: 10,
};

const countSlide = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        (action: PayloadAction<number>) => action.payload == 10,
        (state, action: PayloadAction<number>) => {
          state.count += action.payload;
        }
      )
      .addDefaultCase((state) => {
        console.log(`Count State: ${state.count}`);
      });
  },
});

export const { decrement, increment } = countSlide.actions;

export default countSlide.reducer;

// const countReducer = createReducer(initState, (builder) => {
//   builder
//     .addCase(counterIncrement, (state, action) => {
//       state.count += action.payload;
//     })
//     .addCase(counterDecrement, (state, action) => {
//       state.count -= action.payload;
//     })
//     .addMatcher(
//       (action) => action.type.includes("counter/cong10"),
//       (state, action) => {
//         state.count += action.payload;
//       }
//     );
// });

// export default countReducer;
