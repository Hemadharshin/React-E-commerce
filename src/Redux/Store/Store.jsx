import { configureStore } from "@reduxjs/toolkit";
import CartReducer from '../CardSlice'
const store= configureStore({
  reducer:{
    cart:CartReducer,
  }
})
export default store

