import React from 'react';
import { Provider } from "react-redux";
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Navigation, Home, Products, ProductList, ProductDetail, NotFound, Cart } from './Components';
import { store } from './API/store';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './Theme/theme';

const App = () => {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Router>
        <Navigation />
        <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/:productID" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
