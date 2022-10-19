import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './Navbar.module.scss';
import Logo from '../../images/meal_khuj_logo.png';

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Link href="/">
        <a className={classes.logo}>
          <Image src={Logo} />
        </a>
      </Link>

      <ul className={classes.navLinks}>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/saveMeals">Saved Lists</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
