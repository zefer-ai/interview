import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { Product } from './components/Product';

export const AppRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path='products/:productId' element={<Product />}>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
