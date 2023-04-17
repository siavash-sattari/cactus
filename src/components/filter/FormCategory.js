import React, { useEffect, useState } from 'react';
import WrapperFilterSection from '../utilities/WrapperFilterSection';
import classes from './FormCategory.module.css';

const categories = ['flower', 'cactus', 'others'];

const FormCategory = ({ setFilter, filterVal }) => {
  const [selectedCategories, setSelectedCategories] = useState(filterVal);

  const handleChange = ({ target }) => {
    if (target.checked) {
      setSelectedCategories([...selectedCategories, target.value]);
    } else {
      setSelectedCategories(currValue => {
        return currValue.filter(val => val !== target.value);
      });
    }
  };

  useEffect(() => {
    setFilter(selectedCategories);
  }, [selectedCategories, setFilter]);

  useEffect(() => {
    setSelectedCategories(filterVal);
  }, [filterVal]);

  return (
    <WrapperFilterSection title='Categories'>
      <form className={classes.form}>
        {categories.map(category => (
          <div className={classes.divInput} key={category}>
            <input
              type='checkbox'
              name='categoria'
              id={category}
              value={category}
              onChange={handleChange}
              checked={selectedCategories.includes(category)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </form>
    </WrapperFilterSection>
  );
};

export default FormCategory;
