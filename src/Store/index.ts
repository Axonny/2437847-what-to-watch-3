import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer.ts';
import { createAPI } from '../Services/api.ts';

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
