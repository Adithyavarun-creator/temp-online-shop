import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

 const getLocalStorage = () =>{
   let cart = localStorage.getItem('cart')
   if(cart){
     return JSON.parse(localStorage.getItem('cart'))
   }else {
     return []
   }
 }

const initialState = {
  cart:getLocalStorage(),
  totalitems:0,
  totalamount:0,
  shippingfee:534
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {

  const [state,dispatch] = useReducer(reducer,initialState)

  //addtocart
  const addtocart = (id,color,amount,product)=>{
    dispatch({
      type:ADD_TO_CART,
      payload:{id,color,amount,product}
    })
  }

  const removeitem = (id) =>{
    dispatch({
      type : REMOVE_CART_ITEM,
      payload:id
    })
  }


  const toggleamount =(id,value) =>{
    dispatch({
      type:TOGGLE_CART_ITEM_AMOUNT,
      payload:{id,value}
    })
  }

  const clearcart = () =>{
    dispatch({
      type:CLEAR_CART
    })
  }

  //for localstorage
  useEffect(()=>{
    //for cart totals
    dispatch({
      type:COUNT_CART_TOTALS
    })
    localStorage.setItem('cart',JSON.stringify(state.cart))
  },[state.cart])

  return (
    <CartContext.Provider 
    value={{...state,
      addtocart,
      removeitem,
      toggleamount,
      clearcart
    }}>
      {children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
