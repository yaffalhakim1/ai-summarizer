import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./Article";

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
  //   devTools: process.env.NODE_ENV !== "production",
});
