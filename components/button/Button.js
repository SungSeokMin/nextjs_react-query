import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import classes from './Button.module.scss';

function ButtonWithLink({ link = '/', children, variant = 'secondary' }) {
  return (
    <Link href={link}>
      <a type="button" className={clsx(classes.button, classes[`variant__${variant}`])}>
        {children}
      </a>
    </Link>
  );
}

export default ButtonWithLink;

function Button({ children, variant = 'secondary', className, onClick }) {
  return (
    <button
      type="button"
      className={clsx(classes.button, className, classes[`variant__${variant}`])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export { Button };
