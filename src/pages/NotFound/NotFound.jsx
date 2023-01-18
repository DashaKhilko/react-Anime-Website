import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className="container">
      <div className={styles.notFoundBlock}>
        <div className={styles.title}>Страница не найдена...</div>
        <div className={styles.image}>
          <img
            src="image/notFound3.jpg"
            alt="imageNotFound"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
