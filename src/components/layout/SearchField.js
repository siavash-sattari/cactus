import React, { useContext } from 'react';
import classes from './SearchField.module.css';
import WrapperButton from '../utilities/WrapperButton';
import { FilterContext } from '../../context/FilterContext';
import { SearchIcon } from '../icons';

const SearchField = () => {
  const { saveInputSearchVal } = useContext(FilterContext);
  const searchHandler = e => {
    e.preventDefault();

    const inputValue = e.target.search.value.toLowerCase().trim();

    saveInputSearchVal(inputValue);
  };

  return (
    <form className={classes.form} onSubmit={searchHandler}>
      <label htmlFor='search'>Pesquise aqui</label>
      <input type='search' name='search' id='search' placeholder='What are you looking for?' />
      <WrapperButton className={classes.btn} title='Procurar'>
        <SearchIcon className={classes.iconSearch} />
      </WrapperButton>
    </form>
  );
};

export default SearchField;
