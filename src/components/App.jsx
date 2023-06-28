import React, { lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import NotFound from 'pages/notFound/NotFound';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Casts = lazy(() => import('components/Casts/Casts'));
const Reviews = lazy(() => import('components/Rewiews'));

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:movieId" element={<MovieDetails />}>
            <Route path="casts" element={<Casts />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

