import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// First, create the thunk
export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async () => {
        const response = await axios.get('http://localhost:8080/users/all')
        console.log(response)
        return response.data
    }
)

const initialState = {
    ListUser: [],
    isLoading: false,
    isError: false
}

export const UserSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUser.pending, (state, action) => {

            state.isLoading = true
            state.isError = false

        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {

            state.ListUser = action.payload
            state.isLoading = false
            state.isError = false


        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true

        })
    },
})


export default UserSlice.reducer