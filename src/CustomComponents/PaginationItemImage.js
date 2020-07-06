import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { fade, useTheme, withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { capitalize } from "@material-ui/core/utils";
import { CardMedia } from "@material-ui/core";

export const styles = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    ...theme.typography.body2,
    borderRadius: 32 / 2,
    textAlign: "center",
    boxSizing: "border-box",
    minWidth: 32,
    height: 32,
    margin: "0 9px",
    color: theme.palette.text.primary,
  },
  imageRoot: {
    ...theme.typography.body2,
    textAlign: "center",
    boxSizing: "border-box",
    minWidth: "32px",
    height: "32px",
    color: theme.palette.text.primary,
  },
  /* Styles applied to the root element if `type="page"`. */
  page: {
    transition: theme.transitions.create(["color", "background-color"], {
      duration: theme.transitions.duration.short,
    }),
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&$focusVisible": {
      backgroundColor: theme.palette.action.focus,
    },
    "&$selected": {
      backgroundColor: theme.palette.action.selected,
      "&:hover, &$focusVisible": {
        backgroundColor: fade(
          theme.palette.action.selected,
          theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.action.selected,
        },
      },
      "&$disabled": {
        opacity: 1,
        color: theme.palette.action.disabled,
        backgroundColor: theme.palette.action.selected,
      },
    },
    "&$disabled": {
      opacity: theme.palette.action.disabledOpacity,
    },
  },
  /* Styles applied applied to the root element if `size="small"`. */
  sizeSmall: {
    minWidth: 26,
    height: 26,
    borderRadius: 26 / 2,
    "& $icon": {
      fontSize: theme.typography.pxToRem(18),
    },
  },
  /* Styles applied applied to the root element if `size="large"`. */
  sizeLarge: {
    minWidth: 60,
    height: 60,
    borderRadius: 40 / 2,
    fontSize: theme.typography.pxToRem(15),
    "& $icon": {
      fontSize: theme.typography.pxToRem(22),
    },
  },

  imageSmall: {
    minWidth: 26,
    height: 26,
    borderRadius: 26 / 2,
    "& $icon": {
      fontSize: theme.typography.pxToRem(18),
    },
  },
  /* Styles applied applied to the root element if `size="large"`. */
  imageLarge: {
    minWidth: 60,
    height: 60,
    margin: "auto",
    fontSize: theme.typography.pxToRem(15),
    "& $icon": {
      fontSize: theme.typography.pxToRem(22),
    },
  },
  /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
  textPrimary: {
    "&$selected": {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      "&:hover, &$focusVisible": {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.primary.main,
        },
      },
      "&$disabled": {
        color: theme.palette.action.disabled,
      },
    },
  },
  /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
  textSecondary: {
    "&$selected": {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      "&:hover, &$focusVisible": {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.secondary.main,
        },
      },
      "&$disabled": {
        color: theme.palette.action.disabled,
      },
    },
  },
  /* Styles applied to the root element if `outlined="true"`. */
  outlined: {
    border: `1px solid ${
      theme.palette.type === "light"
        ? "rgba(0, 0, 0, 0.23)"
        : "rgba(255, 255, 255, 0.23)"
    }`,
    "&$selected": {
      "&$disabled": {
        border: `1px solid ${theme.palette.action.disabledBackground}`,
      },
    },
  },
  /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
  outlinedPrimary: {
    "&$selected": {
      color: theme.palette.primary.main,
      border: `2px solid ${fade(theme.palette.primary.main, 0.5)}`,
      backgroundColor: fade(
        theme.palette.primary.main,
        theme.palette.action.activatedOpacity
      ),
      "&:hover, &$focusVisible": {
        backgroundColor: fade(
          theme.palette.primary.main,
          theme.palette.action.activatedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "&$disabled": {
        color: theme.palette.action.disabled,
      },
    },
  },
  /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
  outlinedSecondary: {
    "&$selected": {
      color: theme.palette.secondary.main,
      border: `1px solid ${fade(theme.palette.secondary.main, 0.5)}`,
      backgroundColor: fade(
        theme.palette.secondary.main,
        theme.palette.action.activatedOpacity
      ),
      "&:hover, &$focusVisible": {
        backgroundColor: fade(
          theme.palette.secondary.main,
          theme.palette.action.activatedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "&$disabled": {
        color: theme.palette.action.disabled,
      },
    },
  },
  /* Styles applied to the root element if `rounded="true"`. */
  rounded: {
    borderRadius: theme.shape.borderRadius,
  },
  /* Styles applied to the root element if `type="start-ellipsis"` or `type="end-ellipsis"`. */
  ellipsis: {
    height: "auto",
    "&$disabled": {
      opacity: theme.palette.action.disabledOpacity,
    },
  },
  /* Pseudo-class applied to the root element if keyboard focused. */
  focusVisible: {},
  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},
  /* Pseudo-class applied to the root element if `selected={true}`. */
  selected: {
    border: "1px solid",
    borderColor: theme.palette.secondary.main,
  },
/* Styles applied to the icon element. */
  iconButton: {
    backgroundColor: theme.palette.secondary.main,
  },
  icon: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.primary.contrastText,
    margin: "0 -8px",
  },
});

const PaginationItemImage = React.forwardRef(function PaginationItem(props, ref) {
  const {
    classes,
    image = null,
    className,
    color = "primary",
    component,
    disabled = false,
    page,
    selected = false,
    shape = "round",
    size = "medium",
    type = "page",
    variant = "text",
    ...other
  } = props;

  const theme = useTheme();

  const normalizedIcons =
    theme.direction === "rtl"
      ? {
          previous: NavigateNextIcon,
          next: NavigateBeforeIcon,
          last: FirstPageIcon,
          first: LastPageIcon,
        }
      : {
          previous: NavigateBeforeIcon,
          next: NavigateNextIcon,
          first: FirstPageIcon,
          last: LastPageIcon,
        };
  const Icon = normalizedIcons[type];

  return type === "start-ellipsis" || type === "end-ellipsis" ? (
    <div
      ref={ref}
      className={clsx(classes.root, classes.ellipsis, {
        [classes.disabled]: disabled,
        [classes[`size${capitalize(size)}`]]: size !== "medium",
      })}
    >
      …
    </div>
  ) : (
    <ButtonBase
      ref={ref}
      component={component}
      disabled={disabled}
      focusVisibleClassName={classes.focusVisible}
      className={clsx(
        classes.root,
        classes.page,
        classes[variant],
        classes[shape],
        {
          [classes[`${variant}${capitalize(color)}`]]: color !== "standard",
          [classes.disabled]: disabled,
          [classes.selected]: selected,
          [classes[`size${capitalize(size)}`]]: size !== "medium",
          [classes.iconButton] : type==="next" || type==="previous",
        },
        className
      )}
      {...other}
    >
      {type === "page" && image!==null ? (
          <CardMedia
            className={clsx(
              classes.imageRoot,
              classes.page,
              classes[variant],
              classes[shape],
              {
                [classes[`${variant}${capitalize(color)}`]]:
                  color !== "standard",
                [classes.disabled]: disabled,
                [classes.selected]: selected,
                [classes[`image${capitalize(size)}`]]: size !== "medium",
              },
              className
            )}
            image={image}
          ></CardMedia>
      ) : (
        ""
      )}
      {Icon ? <Icon className={classes.icon} /> : null}
    </ButtonBase>
  );
});

PaginationItemImage.propTypes = {
  /**
   * @ignore
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The active color.
   */
  color: PropTypes.oneOf(["standard", "primary", "secondary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the item will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The current page number.
   */
  page: PropTypes.number,
  /**
   * If `true` the pagination item is selected.
   */
  selected: PropTypes.bool,
  /**
   * The shape of the pagination item.
   */
  shape: PropTypes.oneOf(["round", "rounded"]),
  /**
   * The size of the pagination item.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * The type of pagination item.
   */
  type: PropTypes.oneOf([
    "page",
    "first",
    "last",
    "next",
    "previous",
    "start-ellipsis",
    "end-ellipsis",
  ]),
  /**
   * The pagination item variant.
   */
  variant: PropTypes.oneOf(["text", "outlined"]),
};

export default withStyles(styles, { name: "MuiPaginationItem" })(
  PaginationItemImage
);
