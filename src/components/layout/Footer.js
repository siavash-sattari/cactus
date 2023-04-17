import React from 'react';
import classes from './Footer.module.css';
import { GithubIcon } from '../icons';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>
        Projected by{' '}
        <a href='https://github.com/siavash-sattari' target='_blank' rel='noreferrer'>
          {' '}
          Siavash Sattari <GithubIcon />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
