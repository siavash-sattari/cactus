import React, { useContext, useEffect, useState } from 'react';
import classes from './Header.module.css';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import { CartContext } from '../../context/CartContext';
import { ColorModeContext } from '../../context/ColorModeContext';
import SearchField from './SearchField';
import { CartIcon, MoonIcon, SunIcon } from '../icons';

const Header = ({ onShow }) => {
  const { itemsCart } = useContext(CartContext);
  const { changeMode, isDarkMode } = useContext(ColorModeContext);
  const [pageScrolled, setPageScrolled] = useState(false);

  const totalItemsInTheCart = itemsCart.items.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  useEffect(() => {
    const scrollPage = () => {
      if (window.scrollY > 16) {
        setPageScrolled(true);
      } else {
        setPageScrolled(false);
      }
    };

    window.addEventListener('scroll', scrollPage);

    return () => {
      window.removeEventListener('scroll', scrollPage);
    };
  }, []);

  return (
    <header className={`${classes.header} ${pageScrolled ? classes.scroll : ''}`}>
      <div className={`container ${classes.container}`}>
        <span className={classes.logo}>
          <LogoSvg />
          Cactus
        </span>

        <SearchField />

        <button className={classes.cart} onClick={onShow}>
          <span className={classes.cartTxt}>Your cart</span>
          <span className={classes.amount}>
            <CartIcon />
            <span className={classes.value}>{totalItemsInTheCart}</span>
          </span>
        </button>

        <button className={classes.btnColorMode} onClick={changeMode} title={isDarkMode ? 'Enable light mode' : 'Enable dark mode'}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
