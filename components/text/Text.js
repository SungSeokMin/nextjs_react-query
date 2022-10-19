import React from 'react';
import clsx from 'clsx';
import classes from './Text.module.scss';

function Text({ className, children }) {
  return <p className={clsx(classes.text, className)}>{children}</p>;
}

export default Text;
