import React, { useCallback, useRef } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Search.module.scss';
import { setCurrentValue, setValue } from '../../redux/slices/search';

const Search = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.search);
  const inputRef = useRef(null);

  const changeSearch = (event) => {
    dispatch(setValue(event.target.value));
    detainSearch(event.target.value);
  };

  const detainSearch = useCallback(
    debounce((str) => {
      dispatch(setCurrentValue(str));
    }, 500),
    [],
  );

  const clearInput = () => {
    dispatch(setValue(''));
    dispatch(setCurrentValue(''));
    inputRef.current.focus();
  };

  return (
    <div className={styles.search}>
      <div className={styles.title}>Поиск</div>
      <input
        type="text"
        value={value}
        ref={inputRef}
        onChange={changeSearch}
        placeholder="Поиск..."
      />
      <svg
        className={styles.searchImg}
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="23px"
        height="23px">
        <path
          fill="#242424"
          d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"
        />
      </svg>
      {value && (
        <svg
          className={styles.removeImg}
          onClick={clearInput}
          xmlns="http://www.w3.org/2000/svg"
          width="19px"
          height="19px"
          viewBox="0 0 24 24">
          <path
            fill="#242424"
            d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
