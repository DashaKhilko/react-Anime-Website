import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AnimeBlock.module.scss';

const AnimeBlock = React.forwardRef(
  ({ id, image, title, numberOfSeasons, season, episode }, ref = null) => {
    return (
      <>
        <div
          ref={ref}
          className={styles.animeBlock}>
          <Link to={`/anime/${id}`}>
            <div className={styles.image}>
              <img
                src={image}
                alt="anime"
              />
            </div>
            <div className={styles.title}>{title}</div>
          </Link>
          <div className={styles.numberOfSeasons}>
            количество сезонов: {numberOfSeasons}, сезон: {season}, серий: {episode}
          </div>
        </div>
      </>
    );
  },
);

export default AnimeBlock;
