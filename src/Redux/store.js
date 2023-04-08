// import {configureStore ,createSlice} from '@reduxjs/toolkit'
// // import rootReducer  from "./rootReducer"
// // import { createStoreHook } from "react-redux";

// // const store = configureStore({reducer:rootReducer})



// const reducerSlice = createSlice({
//   name: 'cart',
//   initialState: {},
//   reducers: {
//      addToCart(state,action){
//       return state.data;
//      }

     
//   }
// })

// export const actions = createSlice.actions;

// const store = configureStore({
//   reducer: reducerSlice.reducer
//   }
// )

// export default store;

import { createStore } from 'redux';
import rootReducer from './rootReducer'


const store = createStore(rootReducer)
export default store;