import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import Categories from '../../components/categories/Categories';
import SearchBar from '../../components/mealsPage/SearchBar';
import SingleMealCard from '../../components/mealsPage/SingleMealCard';
import PointText from '../../components/text/PointText';
import classes from './meals.module.scss';

const override = {
  display: 'inline-block',
  margin: '0 auto',
};

const getCategories = async () => {
  const { data } = await axios.get('/categories.php');

  return data.categories;
};

const getMeals = async ({ queryKey }) => {
  const { data } = await axios.get(`/filter.php?c=${queryKey[1]}`);

  return data?.meals || [];
};

const getQueriedMeals = async ({ queryKey }) => {
  const { data } = await axios.get(`/search.php?s=${queryKey[1]}`);

  return data?.meals || [];
};

function Meals() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchText, setSearchText] = useState('');
  const [query, setQuery] = useState('');

  const {
    data: categories,
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
  } = useQuery(['categories'], getCategories);

  const {
    data: meals,
    isLoading: mealsIsLoading,
    isError: mealsIsError,
  } = useQuery(['mealsByCategory', selectedCategory], getMeals, {
    enabled: query === '',
  });

  const {
    data: queriedData,
    isLoading: queriedIsLoading,
    isError: queriedIsError,
  } = useQuery(['mealsByQuery', query], getQueriedMeals, {
    enabled: query !== '',
  });

  useEffect(() => {
    if (categories) setSelectedCategory(categories[0].strCategory);
  }, [categories]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText) {
        setQuery(searchText);
        setSelectedCategory('');
      } else {
        setQuery('');

        if (categories) {
          setSelectedCategory(categories[0].strCategory);
        }
      }
    }, 300);

    return () => {
      setQuery('');
      clearTimeout(timeout);
    };
  }, [searchText, categories]);

  return (
    <div className={classes.meals__page}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />

      <PointText className={classes.text}>search meals or select categories from below.</PointText>

      <Categories
        categories={categories}
        categoriesIsError={categoriesIsError}
        categoriesIsLoading={categoriesIsLoading}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setQuery={setQuery}
      />

      {mealsIsLoading || categoriesIsLoading ? (
        <div className={classes.loadingSpinner}>
          <BeatLoader
            color="#fff"
            loading={mealsIsLoading || categoriesIsLoading}
            cssOverride={override}
            size={20}
          />
        </div>
      ) : null}

      <div className={classes.meals__container}>
        {!mealsIsLoading &&
          !mealsIsError &&
          meals &&
          meals.map((meal) => <SingleMealCard meal={meal} key={meal.idMeal} />)}

        {!queriedIsLoading &&
          !queriedIsError &&
          queriedData &&
          queriedData.map((meal) => <SingleMealCard meal={meal} key={meal.idMeal} />)}
      </div>
    </div>
  );
}

export default Meals;
