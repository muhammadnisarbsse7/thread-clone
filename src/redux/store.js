import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slice.js';
import { serviceApi } from './service.js';

export const store = configureStore({
  reducer: {
    service: serviceReducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(serviceApi.middleware),
});
