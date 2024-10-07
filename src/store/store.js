import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducer/CounterSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})