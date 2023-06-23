import { NavLink , Route , Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies'
import MovieDetails from 'pages/MovieDetails'
import Casts from 'components/Casts'

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

        <Routes>
          <Route path="/"element={<Home/>} />
          <Route path="/movies"element={<Movies />}/>
            <Route path="/movie/:movieId" element={<MovieDetails />} >
            <Route path="casts" element={<Casts/>} />
            <Route path="rewiews" element={<>тут буде інформація про frytuuijk</>} />
          </Route>
        </Routes>
      </div>
  );
};
