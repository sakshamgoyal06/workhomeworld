import React from "react";
import ProductGrid from "./components/ProductGrid";
import { Paper } from "@material-ui/core";
import  PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import PaginationControlled from "./components/Pagination";
const ProductPage = (props) => {
  const { productList } = props;
  return (
    <Paper>
      <PrimarySearchAppBar productListMaster={productList}/>
      <Paper style={{ marginTop: "10px", marginBottom: "10px" }}>
        <PaginationControlled></PaginationControlled>
        <ProductGrid productList={productList}></ProductGrid>
      </Paper>
    </Paper>
  );
};

export default ProductPage;
