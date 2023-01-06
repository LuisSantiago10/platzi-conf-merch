import React from 'react'
import Product from './Product'
import '../styles/components/Products.css';

function Products({Products}) {
  return (
    <div className='Products'>
        <div className="Products-items">
            {
                Products.map( product => (
                    <Product key={product.id} product={product}/>
                ))
            }
        </div>
    </div>
  )
}

export default Products