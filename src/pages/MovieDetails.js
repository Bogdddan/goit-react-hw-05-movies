import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(id);
  console.log(useParams());

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id) return;
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
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
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>{movie.title}</div>
      <div>{id}</div>
      <ul>
        <li>
          <Link to={`/movie/${id}/casts`}>Casts</Link>
        </li>
        <li>
          <Link to={`/movie/${id}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
