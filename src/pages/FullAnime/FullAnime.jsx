import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setFullItem } from '../../redux/slices/anime';
import styles from './FullAnime.module.scss';

const FullAnime = () => {
  const dispatch = useDispatch();
  const { fullItem } = useSelector((state) => state.anime);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const { data } = await axios.get('https://63718797025414c637f9426e.mockapi.io/anime/' + id);
        dispatch(setFullItem(data));
      } catch (error) {
        console.log('ERROR', error);
        alert('Ошибка при получении данных');
        navigate('/');
      }
    };
    fetchAnime();
    window.scrollTo(0, 0);
  }, []);

  if (!fullItem) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <div className={styles.fullAnime}>
        <div className={styles.title}>{fullItem.title}</div>
        <div className={styles.imageAndInformation}>
          <div className={styles.image}>
            <img
              src={fullItem.image}
              alt="poster"
            />
          </div>
          <div className={styles.information}>
            <div className={styles.block}>
              <div className={styles.nameBlock}>Рейтинг:</div>
              <div className={styles.textBlock}>{fullItem.rating}</div>
            </div>
            <div className={styles.block}>
              <div className={styles.nameBlock}>Дата выхода:</div>
              <div className={styles.textBlock}>{fullItem.yearOfIssue}</div>
            </div>
            <div className={styles.block}>
              <div className={styles.nameBlock}>Жанр:</div>
              <div className={styles.textBlock}>{fullItem.genre}</div>
            </div>
            <div className={styles.block}>
              <div className={styles.nameBlock}>Тип:</div>
              <div className={styles.textBlock}>{fullItem.type}</div>
            </div>
            <div className={styles.block}>
              <div className={styles.nameBlock}>Возраст:</div>
              <div className={styles.textBlock}>{fullItem.ageRating}+</div>
            </div>
            <div className={styles.block}>
              <div className={styles.nameBlock}>Количество сезонов:</div>
              <div className={styles.textBlock}>{fullItem.numberOfSeasons}</div>
            </div>
            <div className={styles.block}>
              <div className={styles.nameBlock}>Сезон:</div>
              <div className={styles.textBlock}>{fullItem.season}</div>
            </div>
            <div className={styles.block}>
              <div className={styles.nameBlock}>Количество серий:</div>
              <div className={styles.textBlock}>{fullItem.episode}</div>
            </div>
          </div>
        </div>
        <div className={styles.titleDescription}>Описание аниме:</div>
        <div className={styles.textDescription}>{fullItem.description}</div>
        <div className={styles.titleVideo}>Трейлер:</div>
        <div className={styles.videoBlock}>
          <iframe
            className={styles.video}
            frameBorder="0"
            src={fullItem.video}></iframe>
        </div>
      </div>
    </div>
  );
};

export default FullAnime;
