import React, { useContext } from 'react';
import { FilterContext } from '../../../context/FilterContext';
import { ColorModeContext } from '../../../context/ColorModeContext';
import classes from './FilterTags.module.css';
import { CloseIcon } from '../../icons';

const FilterTags = () => {
  const { filter, deleteColor, deleteCategory, deleteInputSearchVal } = useContext(FilterContext);

  const { isDarkMode } = useContext(ColorModeContext);

  return (
    <>
      {filter.name && (
        <p className={`${classes.searchName} ${isDarkMode ? classes.darkMode : ''}`}>
          <button onClick={deleteInputSearchVal} title='excluir pesquisa'>
            <CloseIcon />
          </button>{' '}
          results for "{filter.name}"
        </p>
      )}
      {(filter.colors.length !== 0 || filter.categories.length !== 0) && (
        <ul className={classes.filterList}>
          {filter.colors.map(color => (
            <li key={color}>
              {color}{' '}
              <button title={`excluir filtro para a cor ${color}`} onClick={() => deleteColor(color)}>
                <CloseIcon />
              </button>
            </li>
          ))}
          {filter.categories.map(category => (
            <li key={category}>
              {category}{' '}
              <button title={`excluir filtro da categoria ${category}`} onClick={() => deleteCategory(category)}>
                <CloseIcon />
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FilterTags;
