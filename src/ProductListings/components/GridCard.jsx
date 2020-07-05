//TODO : Create theme, fonts etc
//TODO : check grid.
import React from "react";
import Card from "@material-ui/core/Card/Card";
import Grid from "@material-ui/core/Grid/Grid";
import clsx from "clsx";
import { Hidden } from "@material-ui/core";
import {
  CardMedia,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    maxWidth: "300px",
    [theme.breakpoints.down("xs")]: {
      minWidth: "100%",
    },
  },

  gridMainStyle: {},
  gridMediaStyle: {},
  gridCardActionStyle: {
    backgroundColor: theme.palette.primary.main, //TODO pass state and props and fix color to white on expanded
  },
  gridContentStyle: {},
  gridByStyle: {
    padding: "0.2rem",
  },
  gridTitleStyle: {
    padding: "3% 2% 1% 2%",
  },

  cardMediaStyle: {
    backgroundSize: "contain",
    height: "200px",
    width: "100%",
    paddingTop: "1%",
    paddingBottom: "2%",
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  gridPriceRatingContainer: {
    padding: "1%",
  },

  cardHeader: {
    height: "30px",
    width: "100%",
    padding: "4px",
    backgroundColor: theme.palette.primary.main,
    action: {
      alignSelf: "flex-end",
    },
  },
  details: {
    fontFamily : theme.typography.fontPara,
  },
  price: {
    fontFamily : theme.typography.font1,
  },
  title: {
    
  },
  by: {
    paddingRight:"0.5rem",
    fontFamily: theme.typography.font2,
    fontWeight: "bold",

  },
}));

const GridCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles(props, expanded);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
    title,
    price,
    by,
    imageUrl,
    rating,
    description,
  } = props;

  return (
    <Card raised square className={classes.cardStyle}>
      <Grid container>
        <Grid
          container
          className={classes.gridMainStyle}
          item
          xs={false}
          sm={12}
          justify="flex-end"
          alignItems="flex-end"
        >
          <Hidden xsDown>
            <CardHeader
              className={classes.cardHeader}
              action={
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              }
            ></CardHeader>
          </Hidden>
        </Grid>

        <Grid
          container
          item
          className={classes.gridMediaStyle}
          justify="center"
          alignItems="center"
          xs={4}
          sm={12}
          stylle={{ padding: "0" }}
        >
          <CardMedia
            image={imageUrl}
            className={classes.cardMediaStyle}
          ></CardMedia>
        </Grid>

        <Grid
          container
          item
          className={classes.gridContentStyle}
          justify="center"
          xs={8}
          sm={12}
        >
          <Grid item xs={12}>
            <Hidden smUp>
              <CardHeader
                className={classes.cardHeader}
                action={
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                }
              ></CardHeader>
            </Hidden>
          </Grid>
          <Grid container item xs={12} className={classes.gridTitleStyle}>
            <Grid item xs={12}>
              <Typography
                align="center"
                noWrap
                variant="h6"
                className={classes.title}
              >
                {title}
              </Typography>
            </Grid>
            <Grid className={classes.gridByStyle} item xs={12}>
              <Typography
                align="right"
                noWrap
                variant="body2"
                className={classes.by}
              >
                By: {by}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            alignItems="center"
            justify="space-between"
            spacing={2}
            className={classes.gridPriceRatingContainer}
          >
            <Grid item>
              <Typography noWrap variant="h5" className={classes.price}>
                {price}
              </Typography>
            </Grid>
            <Grid>
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
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography className={classes.details}>{description}</Typography>
            </CardContent>
          </Collapse>
          <Grid
            container
            item
            xs={12}
            zeroMinWidth
            alignItems="center"
            justify="space-between"
            className={classes.gridCardActionStyle}
          >
            <Grid container item xs={12} justify="space-between">
              <Grid item>
                <IconButton aria-label="add to cart">
                  <AddShoppingCartIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default GridCard;
