import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg'
import classes from './header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Flame Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="table of food"/>
      </div>
    </Fragment>
  );
};

export default Header;
