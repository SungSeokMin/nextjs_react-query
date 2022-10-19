import React from 'react';
import classes from './SearchBar.module.scss';

function SearchBar({ searchText, setSearchText }) {
  return (
    <input
      type="text"
      className={classes.input}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="search meals"
    />
  );
}

export default SearchBar;
