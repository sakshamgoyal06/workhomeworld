import React from "react";
import PaginationControlled from "../CustomComponents/PaginationControlled";
import { Grid, CardMedia, Typography } from "@material-ui/core";
import PrimarySearchAppBar from "../CustomComponents/PrimarySearchAppBar";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  gridPageContainer: {},
  PrimarySearchAppBar: {},
  gridMediaContainer: {
    margin: "0px",
    border: "1px solid",
    borderRightColor: theme.palette.secondary.main,
  },
  gridMediaItem: {},
  gridPaginationItem: {},
  gridImagePriceContainer: {},
  gridDetailsContainer: {},

  cardMediaStyle: {
    backgroundSize: "contain",
    minHeight: "400px",
    [theme.breakpoints.down("xs")]: {
      minHeight: "200px",
    },
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: "0px",
  },
}));

const ProductDetailsPage = (props) => {
  const { imageArray = [props.product.imageUrl], productList, product } = props;

  const {
    imageUrl,
    title,
    description,
    by,
    price,
    rating,
    numRating,
  } = product;

  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <PrimarySearchAppBar
            productListMaster={productList}
            className={classes.gridPageContainer}
          />
        </Grid>
        <Grid
          item
          container
          className={classes.gridImagePriceContainer}
          xs={12}
          spacing={1}
          zeroMinWidth
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            justify="space-around"
            alignItems="stretch"
            direction="column"
            container
            spacing={3}
            className={classes.gridMediaContainer}
          >
            <Grid item className={classes.gridMediaItem}>
              <CardMedia
                image={imageUrl}
                className={classes.cardMediaStyle}
              ></CardMedia>
            </Grid>

            <Grid item className={classes.gridPaginationItem}>
              <PaginationControlled
                imageType={true}
                imageArray={imageArray}
                variant="outlined"
                shape="rounded"
                size="small"
                className={classes.pagination}
              />
            </Grid>
          </Grid>
          <Grid item className={classes.gridDetailsContainer}>
            <Typography> {title} </Typography>
            <Typography> {price} </Typography>
            <Rating
              precision={0.5}
              name="half-rating-read"
              size={"medium"}
              readOnly
              defaultValue={0}
              value={parseFloat(rating)}
            />
          </Grid>
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
};

export default ProductDetailsPage;
