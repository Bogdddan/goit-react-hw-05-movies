import { Link, Outlet, useParams , useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const goBackBtn = () => navigate('/');


  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!movieId) return;
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWNiZTlkZTY0MTI4OTM1OTE2YWUzNzRkMGNkNjA3NyIsInN1YiI6IjY0OTRhMDg4MzkxYjljMDBlODFiYTQzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iTONktEdz4gCVm1GJD3NRI0zRCn5BZSM2hjCzfl__jc",
            },
          }
        );
        const data = await response.json();
        
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <button onClick={goBackBtn}>Go back</button>
      <h1>{movie.title}</h1>
      <div className={css.info}>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={css.photo}
        />
      )}
      <div className={css.infoText}>
        <h2>Overview</h2>
        <div>{movie.overview}</div>
        <h3>Genres</h3>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      </div>
      <h3>Additional Information</h3>
      <ul>
        <li>
          <Link to={`/movie/${movieId}/casts`}>Casts</Link>
        </li>
        <li>
          <Link to={`/movie/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;


// console.log(useParams());