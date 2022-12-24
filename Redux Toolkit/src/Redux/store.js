import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../Redux/slices/counterSlice'
import UserSlice from './slices/UserSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        User: UserSlice
    },
})