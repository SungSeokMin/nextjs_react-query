import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './SingleMealCard.module.scss';
import Title from '../text/Title';

function SingleMealCard({ meal }) {
  return (
    <Link href={`/meals/${meal.idMeal}`} className={classes.item}>
      <a className={classes.item}>
        <Image src={meal.strMealThumb} width="200" height="200" />
        <Title className={classes.titme} variant="secondary">
          {meal.strMeal}
        </Title>
      </a>
    </Link>
  );
}

export default SingleMealCard;
