import React from "react";
import PaginationControlled from "../CustomComponents/PaginationControlled";
import { Grid, CardMedia, Typography, Button, Paper } from "@material-ui/core";
import PrimarySearchAppBar from "../CustomComponents/PrimarySearchAppBar";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  gridPageContainer: {},
  gridBuyCartConsole: {},
  gridItemNameBy: {},
  PrimarySearchAppBar: {},
  gridMediaContainer: {
    maxHeight: "600px",
    margin: "0px",

    [theme.breakpoints.up("sm")]: {
      position: "sticky",
      WebkitPosition: "sticky",
      top: "5px",
    },
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
          <Grid
            item
             direction="column"
                justify="space-evenly"
                alignItems="center"
            container
            xs={12}
            sm={6}
            lg={4}
            className={classes.gridDetailsContainer}
          >
            <Grid item className={classes.gridItemNameBy}>
              <Typography variant="h4"> {title} </Typography>
              <Typography align="left" variant="body2">
                by : {by}
              </Typography>
            </Grid>
            <Grid item className={classes.gridItemNameBy}>
              <Typography variant="h5"> {description} </Typography>
            </Grid>
            <Grid item className={classes.gridItemNameBy}>
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
          <Grid item xs={12} sm={12} lg={2}>
            <Paper
              variant="outlined" square
            >
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                className={classes.gridBuyCartConsole}
              >
                <Grid item>
                  <Button> Add to Cart</Button>
                </Grid>
                <Grid item>
                  <Button> Buy Now</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid item></Grid>
      </Grid>
    </div>
  );
};

export default ProductDetailsPage;
