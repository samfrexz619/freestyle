import  userReducer from '@/features/user/userSlice';
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from '@/features/cake/cakeSlice'


export const store = configureStore({
  reducer: {
    cakeReducer,
    user: userReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


