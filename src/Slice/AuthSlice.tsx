import { ApiSlice } from "./ApiSlice"


export const authSlice = ApiSlice.injectEndpoints({

    endpoints:(builder)=>({
        Login:builder.mutation({
            query: (body)=> ({
                url:"/admin/login",
                method:"POST",
                body
            })
        }),

       
    })
})

export const {
    useLoginMutation
} =authSlice