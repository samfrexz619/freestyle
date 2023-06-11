import { createSlice } from "@reduxjs/toolkit";


export interface InitialState {
  value: number;
}

const initialState: InitialState = {
  value: 10
}

export const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    increment: (state)=> {
      state.value += 1
    },
    decrement: (state)=> {
      state.value -= 1
    },
  }
})

export const { increment, decrement } = cakeSlice.actions

export default cakeSlice.reducer