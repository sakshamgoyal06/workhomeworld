import React from "react";
import ProductGrid from "./components/ProductGrid";
import { Paper, Grid } from "@material-ui/core";
import PrimarySearchAppBar from "../CustomComponents/PrimarySearchAppBar";
import PaginationControlled from "../CustomComponents/PaginationControlled";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles( (theme) => ({
  gridPageSortStyle: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
   pagination: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: "0px",
  },
}));

const ProductListingPage = (props) => {

  const classes = useStyles();

  const { productList } = props;
  return (
    <Paper>
      <Grid container direction="column">
        <Grid item>
          <PrimarySearchAppBar productListMaster={productList} />
        </Grid>
        <Grid item container alignItems={"center"} className={classes.gridPageSortStyle} justify="space-around">
          <Grid item xs={12} sm={6}></Grid>
          <Grid item>
            <PaginationControlled className={classes.pagination}></PaginationControlled>
          </Grid>
        </Grid>
        <Grid item container>
          <Paper>
            <ProductGrid productList={productList}></ProductGrid>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductListingPage;
