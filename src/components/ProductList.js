import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filteredproducts,gridview} = useFilterContext()

  if(filteredproducts.length < 1){
    return <h5 style={{textTransform:'none'}}>
      No products available based on your search...
    </h5>
  }

  if(gridview === false){
    return <ListView products={filteredproducts} />
  }

  return (
    <GridView products={filteredproducts}>
      Productlist
    </GridView>
  )
}

export default ProductList
