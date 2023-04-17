import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { FilterContext } from '../../context/FilterContext';
import { AlertContext } from '../../context/AlertContext';
import WrapperButton from '../utilities/WrapperButton';
import ButtonClose from '../utilities/ButtonClose';
import classes from './Filter.module.css';
import FormCategory from './FormCategory';
import FormColors from './FormColors';
import FormPrice from './FormPrice';
import useVisibility from '../../customHook/useVisibility';
import { FilterIcon } from '../icons';

const Filter = () => {
  const refBtnFilter = useRef();
  const { elementVisible, setElementVisible } = useVisibility(refBtnFilter);
  const { saveFilter, initialFilter, filter: filterSaved } = useContext(FilterContext);
  const { showAlert } = useContext(AlertContext);

  const [filter, setFilter] = useState(initialFilter);

  const setFilterPrices = useCallback(prices => {
    setFilter(currVal => ({ ...currVal, prices }));
  }, []);

  const setFilterColors = useCallback(colors => {
    setFilter(currVal => ({ ...currVal, colors }));
  }, []);

  const setFilterCategories = useCallback(categories => {
    setFilter(currVal => ({ ...currVal, categories }));
  }, []);

  const btnFilter = (
    <button
      className={`${classes.btnOpenFilter} ${elementVisible ? classes.filterVisible : ''}`}
      aria-label='Open filter'
      type='button'
      onClick={() => setElementVisible(currVal => !currVal)}>
      <FilterIcon />
    </button>
  );

  const applyFilter = () => {
    saveFilter(filter);
    const filterHasChanged = !(JSON.stringify(filterSaved) === JSON.stringify(filter));
    if (filterHasChanged) showAlert('Filter applied');
  };

  const cleanFilter = () => {
    saveFilter(initialFilter);
    showAlert('Filter deleted');
  };

  useEffect(() => {
    setFilter(filterSaved);
  }, [filterSaved]);

  return (
    <>
      <div className={classes.filterContainer} ref={refBtnFilter}>
        {btnFilter}
        <section className={`${classes.filter} ${elementVisible ? classes.filterVisible : ''}`}>
          <ButtonClose onClose={() => setElementVisible(false)} className={classes.btnClose} />
          <h2>Filter Search</h2>
          <FormCategory setFilter={setFilterCategories} filterVal={filter.categories} />
          <FormColors setFilter={setFilterColors} filterVal={filter.colors} />
          <FormPrice setFilter={setFilterPrices} />
          <WrapperButton className={classes.btn} onClick={applyFilter}>
            Apply Filter
          </WrapperButton>
          <button onClick={cleanFilter} className={classes.btnClear}>
            Remove Filter
          </button>
        </section>
      </div>
    </>
  );
};

export default Filter;
