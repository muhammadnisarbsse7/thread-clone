import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { data } from 'react-router-dom';

export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    credentials: 'include',
  }),
  KeepUnusedDataFor: 60 * 60 * 24 * 7,
  tagTypes: ['Post', 'User', 'Me'],
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (data) => ({
        url: 'signin',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Me'],
    }),
  }),
});

export const { useSigninMutation, useLoginMutation } = serviceApi;
