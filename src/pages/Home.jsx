import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnime } from '../redux/slices/anime';
import Sort from '../components/Sort/Sort';
import Categories from '../components/Categories/Categories';
import AnimeBlock from '../components/AnimeBlock/AnimeBlock';
import Search from '../components/Search/Search';
import { setCurrentLimit } from '../redux/slices/filter';
import Skeleton from '../components/AnimeBlock/Skeleton';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useRef(true);

  const { items } = useSelector((state) => state.anime);
  const { categoryId, sort, currentLimit } = useSelector((state) => state.filter);
  const { currentValue } = useSelector((state) => state.search);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      dispatch(setCurrentLimit(currentLimit + 12));
    }
  }, [inView]);

  useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    console.log(currentLimit);
    dispatch(fetchAnime({ category, sortBy, order, currentLimit }));

    isLoading.current = false;
  }, [categoryId, sort.sortProperty, currentLimit]);

  const searchedItems = items.filter((item) =>
    item.title.toLowerCase().includes(currentValue.toLowerCase()),
  );

  return (
    <div className="container">
      <div className="sidePanel">
        <Search />
        <Categories />
        <Sort />
      </div>
      <div className="animeBlock">
        {isLoading.current
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : searchedItems.map((item, index) => {
              if ((index + 1) % 12 === 0) {
                return (
                  <AnimeBlock
                    key={item.id}
                    ref={ref}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    numberOfSeasons={item.numberOfSeasons}
                    season={item.season}
                    episode={item.episode}
                  />
                );
              } else {
                return (
                  <AnimeBlock
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    numberOfSeasons={item.numberOfSeasons}
                    season={item.season}
                    episode={item.episode}
                  />
                );
              }
            })}
      </div>
    </div>
  );
};

export default Home;
