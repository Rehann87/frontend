import { ApiSlice } from "./ApiSlice";

export const CategorySlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({

      addCategory: builder.mutation({
        query: ({ categoryData, token }: any) => ({
          url: 'category/add-category',
          method: 'POST',
          body: categoryData,
          headers: {"x-access-token" : token}
        }),
        invalidatesTags: ['category']
      }),
  
      getCategory: builder.query({
        query: ({token}:any) => ({
          url: 'category/get-category',
          method: 'GET',
          headers: {"x-access-token" : token},
        }),
        providesTags: ['category']
      }),
  
      getSingleCategory: builder.query({
        query: ({token, id}: any) => ({
          url: `category/getSingleCategory/${id}`,
          method: 'GET',
          headers: {"x-access-token" : token},
        }),
        providesTags: ['category']
      }),
  
      editCategory: builder.mutation({
        query: ({ categoryData, id, token }: any) => ({
          url: `category/update-category/${id}`,
          method: 'PUT',
          body: categoryData,
          headers: {"x-access-token" : token}
        }),
        invalidatesTags: ['category']
      }),
  
      deleteCategory: builder.mutation({
        query: (id: number) => ({
          url: `category/delete-category/${id}`, // Adjust this endpoint based on your API
          method: 'DELETE',
        }),
        invalidatesTags: ['category']
      }),
    }),
  
})

export const {useAddCategoryMutation, useGetCategoryQuery, useGetSingleCategoryQuery, useEditCategoryMutation, useDeleteCategoryMutation} = CategorySlice