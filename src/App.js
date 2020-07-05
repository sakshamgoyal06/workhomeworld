import React from 'react';
import './App.css';
import ProductListingPage from './ProductListings/ProductListingPage';
import coffeMakerList from "./constants";
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import ProductDetailsPage from './ProductDetailsPage/ProductDetailsPage';
function App() {

  const productList = coffeMakerList;
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
{/*       <ProductListingPage productList = {productList}/>
 */}     
    <ProductDetailsPage productList = {productList} product = {productList[0]}></ProductDetailsPage>
 </div>
    </ThemeProvider>
    
  );
}

export default App;
