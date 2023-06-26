import { NavLink , Route , Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies'
import MovieDetails from 'pages/MovieDetails/MovieDetails'
import Casts from 'components/Casts/Casts'
import Reviews from 'components/Rewiews';


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
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </div>
  );
};
