import React from 'react';
import Products from '../components/Products';
import initialState from '../initialState';

function Home() {
  return (
    <Products Products={ initialState.products } />
  )
}

export default Home