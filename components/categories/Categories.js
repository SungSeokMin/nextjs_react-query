import React from 'react';
import { BeatLoader } from 'react-spinners';
import classes from './Categories.module.scss';
import CategoryItem from './CategoryItem';

function Categories({
  categories,
  categoriesIsLoading,
  categoriesIsError,
  selectedCategory,
  setSelectedCategory,
  setQuery,
}) {
  if (categoriesIsError) {
    return 'error';
  }

  if (categoriesIsLoading) {
    return <BeatLoader color="#fff" />;
  }

  return (
    <div className={classes.categories__container}>
      {categories.map((category) => (
        <CategoryItem
          category={category}
          selectedCategory={selectedCategory}
          onClickHandler={() => {
            setSelectedCategory(category.strCategory);
            setQuery('');
          }}
          key={category.idCategory}
        />
      ))}
    </div>
  );
}

export default Categories;
