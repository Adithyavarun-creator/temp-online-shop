import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if(action.type === ADD_TO_CART){
    const {id,color,amount,product} = action.payload
    const tempitem = state.cart.find((i)=>i.id === id+color) 

    if(tempitem){
      const tempcart = state.cart.map((item)=>{
        if(item.id === id+color){
          let newamount = item.amount + amount
          if(newamount > item.max){
            newamount = item.max
          }
          return {
            ...item,
          amount:newamount
        }
        }else{
          return item
        }
      
    }
    )
    return {...state,cart:tempcart}
    }else{       //for a new item creation
      const newitem ={
        id:id+color,
        name:product.name,
        color,
        amount,
        image:product.images[0].url,
        price:product.price,
        max:product.stock
      }
      return {...state,
      cart:[...state.cart,newitem]
    }
    }
  }

  if(action.type === REMOVE_CART_ITEM){
      const tempcart = state.cart.filter((item)=> item.id !== action.payload)
    return {
        ...state,
        cart:tempcart
    }
  }


  if(action.type === CLEAR_CART){
  return {
      ...state,
      cart:[]
  }
}

if(action.type === TOGGLE_CART_ITEM_AMOUNT){
  const {id,value} = action.payload
  const tempcart = state.cart.map((item)=>{
    if(item.id === id){
      if(value === "inc"){
        let newamount = item.amount +1
        if(newamount > item.max){
          newamount = item.max
        }
        return {...item,amount:newamount}
      }
      if(value === "dec"){
        let newamount = item.amount - 1
        if(newamount < 1){
          newamount = 1
        }
        return {...item,amount:newamount}
      }
    }
      return item
    
  })
  return {
        ...state,
        cart:tempcart
  }
}

if(action.type === COUNT_CART_TOTALS){
  const {totalitems,totalamount} = state.cart.reduce((total,cartitem)=>{
    console.log(total.totalitems)
   //console.log(cartitem)
    const {amount,price} = cartitem
    total.totalitems = total.totalitems + amount
    total.totalamount = total.totalamount + price * amount
    return total
  },{
    totalitems:0,
    totalamount:0
  })
  return {
    ...state,
    totalitems,
    totalamount
  }
}

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
