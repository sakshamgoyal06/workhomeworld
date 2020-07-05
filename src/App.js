import React from 'react';
import './App.css';
import ProductPage from './ProductListings/ProductPage';
import coffeMakerList from "./constants";
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
function App() {

  const productList = coffeMakerList;
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <ProductPage productList = {productList}/>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
