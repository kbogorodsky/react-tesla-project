import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.wrap}>
      <a href="#">
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </a>
      <ul className={`list-reset ${classes.menu}`}>
        <li className={classes.menuItem}>
          <a className={classes.menuLink} href="#">
            Model S
          </a>
        </li>
        <li className={classes.menuItem}>
          <a className={classes.menuLink} href="#">
            Model 3
          </a>
        </li>
        <li className={classes.menuItem}>
          <a className={classes.menuLink} href="#">
            Model X
          </a>
        </li>
        <li className={classes.menuItem}>
          <a className={classes.menuLink} href="#">
            Model Y
          </a>
        </li>
      </ul>
      <div className={classes.rightMenu}>
        <a href="#" className={classes.rightMenuLink}>
          Shop
        </a>
        <a href="#" className={classes.rightMenuLink}>
          Tesla Account
        </a>
      </div>
    </div>
  );
};

export default Header;
