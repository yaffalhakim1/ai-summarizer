import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://conduit.productionready.io/api",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (limit = 10, offset = 0) =>
        `/articles?limit=${limit}&offset=${offset}`,
    }),
  }),
});
