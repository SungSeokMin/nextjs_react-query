import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import classes from './Button.module.scss';

function ButtonWithLink({ link = '/', children, variant = 'secondary' }) {
  return (
    <Link href={link}>
      <a
        type="button"
        className={clsx(classes.button, classes[`variant__${variant}`])}
      >
        {children}
      </a>
    </Link>
  );
}

export default ButtonWithLink;

function Button({ children, variant = 'secondary' }) {
  return (
    <button
      type="button"
      className={clsx(classes.button, classes[`variant__${variant}`])}
    >
      {children}
    </button>

  );
}

export { Button };
