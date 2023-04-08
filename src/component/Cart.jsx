import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
  const data = useSelector((state) =>state.cartData)
  return (
    <div> <ul>
      {
        data.map((item,index) =>{
          return <li key={index}>{item.name}</li>
        }
        )
      }
      </ul></div>
  )
}

export default Cart