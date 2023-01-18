import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import FullAnime from './pages/FullAnime/FullAnime';
import Home from './pages/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/react-AnimeWebsite/"
          element={<Home />}
        />
        <Route
          path="/react-AnimeWebsite/anime/:id"
          element={<FullAnime />}
        />
        <Route
          path="/react-AnimeWebsite/*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
}

export default App;
