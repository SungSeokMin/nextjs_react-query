import Image from 'next/image';
import React from 'react';
import Logo from '../../images/meal_khuj_logo_primary.png';
import Text from '../text/Text';
import classes from './Footer.module.scss';

function Footer() {
  return (
    <footer className={classes.footer}>
      <Image src={Logo} />
      <Text>
        Find the perfect
        meal recipe
        for you
      </Text>

      <Text className={classes.copyright}>
        @sungseokmin
      </Text>
    </footer>
  );
}

export default Footer;
