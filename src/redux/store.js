import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slice.js';

export const store = configureStore({
  reducer: {
    service: serviceReducer,
  },
});
