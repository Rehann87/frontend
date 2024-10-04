import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ApiSlice = createApi({
  reducerPath: 'ApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.2:3000' }),
  tagTypes: ['category'],
  endpoints: (builder) => ({ }),
})