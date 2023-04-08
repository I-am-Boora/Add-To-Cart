import React from 'react'
// import addToCart from '../Redux/action';
// import {actions} from '../Redux/store'
import { useDispatch } from 'react-redux';
const Main = () => {
  const dispatch = useDispatch();
 const product = {
  name:'sumsung m30',
  category:'mobile',
  price:'15000',
  color:'red'
 }
const addItem=(data) => {
  dispatch({type:'ADD_TO_CART',data})
}

const removeItem=(data) => {
  dispatch({type:'REMOVE_FROM_CART',data})
}

const emptyItem=(data) => {
  dispatch({type:'EMPTY_FROM_CART',data})
}
  return (
    <div className='main-container'>
        <button onClick={()=>addItem(product)}>Add to Cart</button>
        <button onClick={()=>removeItem(product)}>Remove to Cart</button>
        <button onClick={()=>emptyItem(product)}>Empty Cart</button>
        
    </div>
  )
}

export default Main