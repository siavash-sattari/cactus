import React from 'react';
import classes from './ButtonClose.module.css';
import { CloseIcon } from '../icons';

const ButtonClose = ({ onClose, className }) => {
  const styles = classes.button + ' ' + className;
  return (
    <button className={styles} onClick={onClose}>
      <CloseIcon />
    </button>
  );
};

export default ButtonClose;
