import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  pagination: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "flex-end",
    padding: "0px",
  },
}));

export default function PaginationControlled() {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Pagination
        className={classes.pagination}
        count={10}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
}
