import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {

if(action.type === LOAD_PRODUCTS){
  let max_price = action.payload.map((p)=>p.price)
  max_price = Math.max(...max_price)
  //console.log(maxprice)
  return {
    ...state,
  allproducts: [...action.payload],
  filteredproducts: [...action.payload],
  filters:{
  ...state.filters,
  maxprice:max_price,
  price:max_price
  }
  }
}

if(action.type === SET_GRIDVIEW){
  return {
    ...state,
    gridview:true

  }
}


if(action.type === SET_LISTVIEW){
  return {
    ...state,
    gridview:false
  }
}

if(action.type === UPDATE_SORT){
  return {
    ...state,
    sort:action.payload,
  }
}


if(action.type === SORT_PRODUCTS){
  const {sort,filteredproducts} = state;
  let tempproducts = [...filteredproducts];
  if(sort === 'price-lowest'){
    //console.log('price-lowest')
    tempproducts = tempproducts.sort(function(a, b){
      return a.price-b.price})
  }

  if(sort === 'price-highest'){
    //console.log('price-highest')
    tempproducts = tempproducts.sort(function(a, b){
      return b.price-a.price})
  
  }

  if(sort === 'name-a'){
    //console.log('name-a')
    tempproducts = tempproducts.sort(function(a, b){
      return a.name.localeCompare(b.name)})
  }

  if(sort === 'name-z'){
    //console.log('name-z')
    tempproducts = tempproducts.sort(function(a, b){
      return b.name.localeCompare(a.name)})
  }
  return {
    ...state,
    filteredproducts:tempproducts
  }
}

if(action.type === UPDATE_FILTERS){
  const {name,value} = action.payload
  return {
    ...state,
    filters:{
      ...state.filters,
      [name]:value
    }
  }
}

if(action.type === FILTER_PRODUCTS){
  //console.log('filtering all')
  const {allproducts} = state

const {text,category,company,color,price,shipping} = state.filters

  let tempproducts = [...allproducts]
  //for text search
  if(text){
    tempproducts = tempproducts.filter((product)=>{
      return product.name.toLowerCase().startsWith(text)
    })
  }

  //for category
  if(category!== 'all'){
    tempproducts = tempproducts.filter((product)=>
    product.category === category)
  }

  //for company
  if(company!=='all' ){
    tempproducts = tempproducts.filter((product)=>
    product.company === company)
  }

  //colors
  if(color!=='all'){
    tempproducts = tempproducts.filter((product)=>{
      //console.log(product)
      return product.colors.find((c)=>c===color)
    })
  }

  //shipping
  if(shipping === true){
    tempproducts = tempproducts.filter((product)=>
    product.shipping === true)
  }

  //price
    tempproducts = tempproducts.filter((product)=>
    product.price <= price)
  
  return {
      ...state,
      filteredproducts:tempproducts
  }
}

if(action.type === CLEAR_FILTERS){
  return {
      ...state,
      filters :{
        ...state.filters,
        text:'',
        company:'all',
        category:'all',
        color:'all',
        price:state.filters.maxprice,
        shipping:false
      }
  }
}

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
