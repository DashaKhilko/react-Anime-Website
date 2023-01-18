import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setIsOpenedCategory } from '../../redux/slices/filter';
import styles from './Categories.module.scss';

const categories = ['Все аниме', 'Фильмы', 'TV сериалы'];

const Categories = () => {
  const dispatch = useDispatch();
  const categoryRef = useRef(null);
  const { categoryId, isOpenedCategory } = useSelector((state) => state.filter);

  const changeCategory = (index) => {
    dispatch(setCategoryId(index));
  };

  useEffect(() => {
    const clickOutside = (event) => {
      if (categoryRef.current && !event.path.includes(categoryRef.current)) {
        return dispatch(setIsOpenedCategory(false));
      }
    };
    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };
  }, []);

  return (
    <div className={styles.categories}>
      <div className={styles.title}>Тип</div>
      <div className={styles.categoryBlock}>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={categoryId === index ? styles.activeCategory : ''}
              onClick={() => changeCategory(index)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div
        ref={categoryRef}
        className={styles.categoryAdaptiveBlock}
        onClick={() => {
          dispatch(setIsOpenedCategory(!isOpenedCategory));
        }}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="#D2D2D2"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#D2D2D2"
          />
        </svg>
        <div>{categories[categoryId]}</div>
      </div>
      {isOpenedCategory && (
        <div className={styles.popup}>
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className={categoryId === index ? styles.activeCategory : ''}
                onClick={() => changeCategory(index)}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categories;
