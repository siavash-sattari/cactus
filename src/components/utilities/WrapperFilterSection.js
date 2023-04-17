import React from 'react';
import classes from './WrapperFilterSection.module.css';
const WrapperFilterSection = ({ title, children }) => {
  return (
    <section className={classes.section}>
      <p className={classes.title}>{title}</p>
      {children}
    </section>
  );
};

export default WrapperFilterSection;
