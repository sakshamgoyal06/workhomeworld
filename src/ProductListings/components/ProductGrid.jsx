import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import GridCard from "./GridCard";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: theme.spacing(2), 
  },
}))
const ProductGrid = (props) => {
  const classes = useStyles();

  const productList = [...props.productList];
  return (
    <Grid container item spacing={2} justify="space-evenly" className={classes.gridContainer}>

        {productList.map((product, index) => {
          return (
            <Grid item key={index} xs={12} sm={"auto"}><GridCard  {...product} ></GridCard> </Grid>
          );
        })}
      </Grid>
  );
};

export default ProductGrid;
