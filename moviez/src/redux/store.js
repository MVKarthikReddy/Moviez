import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
