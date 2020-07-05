import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItemImage from "./PaginationItemImage";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
 
}));

export default function PaginationControlled(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const {
    size,
    count = 10,
    shape,
    className,
    variant,
    imageArray = [],
    imageType = false,
  } = props;

  return (
    
    <div className={classes.root}>
      {
        imageType ? (
        imageArray.length ? (
      <Pagination
        className={clsx(className, classes.pagination)}
        count={imageArray.length}
        size={size}
        shape={shape}
        variant={variant}
        page={page}
        onChange={handleChange}
        renderItem={(item) => {
          return (
            <PaginationItemImage
              {...item}
              image={
                item.type === "page" && imageArray.length >= item.page? props.imageArray[item.page - 1] : null
              }
            />
          );
        }}
      />
      ) : null ): (
          
      <Pagination
        className={classes.pagination}
        count={count}
        size={size}
        shape={shape}
        variant={variant}
        page={page}
        onChange={handleChange}
      />
      )
}    </div>
  );
}
