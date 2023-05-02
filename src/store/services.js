import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:80/',
  prepareHeaders: (headers, { getState }) => {
    // const token = getState().user.token
    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`)
    // }
   // headers.set('Content-Type', 'application/json')
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 })

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  tagTypes: ['PROJECTS', 'KEYS'],

  endpoints: builder => ({

    signUp: builder.mutation({
      query: body => {
        return {
          url: 'index.php',
          method: 'POST',
          body,
        }
      },
    }),

  }),
})

export const {
  useSignUpMutation,
} = api