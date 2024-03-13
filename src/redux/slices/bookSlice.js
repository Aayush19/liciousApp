import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const bookSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = bookSlice.actions;

export default bookSlice.reducer;