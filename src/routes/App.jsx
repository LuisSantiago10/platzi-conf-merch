import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layuout from '../components/Layuout';
import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Success from '../containers/Success';

const App = () => {
  return (
    <BrowserRouter>
      <Layuout>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/checkout/information' element={<Information />} />
            <Route path='/checkout/payment' element={<Payment />} />
            <Route path='/checkout/success' element={<Success />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </Layuout>
    </BrowserRouter>
  )
}

export default App