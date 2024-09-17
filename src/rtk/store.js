import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products-slice'
import  cartSlice  from './slices/Cart-slice'

export const store = configureStore({
  reducer: {
    products:productsSlice,
    cart:cartSlice
  },
  devTools:true
})