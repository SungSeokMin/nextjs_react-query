import clsx from 'clsx';
import React from 'react';
import classes from './Title.module.scss';

function Title({ className, children, variant = 'primary' }) {
  return <h2 className={clsx(classes.title, className, classes[`title__${variant}`])}>{children}</h2>;
}

export default Title;
