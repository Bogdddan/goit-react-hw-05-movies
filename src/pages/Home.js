import { Link } from "react-router-dom";
import { useState , useEffect } from "react"

const Home = () => {

    const [movies, setMovies] = useState([]);

    


    useEffect(() => {
      const fetchMovies = async () => {
        try {
        const response = await fetch(
            'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
            {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization:
                  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWNiZTlkZTY0MTI4OTM1OTE2YWUzNzRkMGNkNjA3NyIsInN1YiI6IjY0OTRhMDg4MzkxYjljMDBlODFiYTQzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iTONktEdz4gCVm1GJD3NRI0zRCn5BZSM2hjCzfl__jc',
              },
            }
          );
          const data = await response.json();
        
          const moviesData = data.results.map(result => ({
            id: result.id,
            title: result.title
          }));
          setMovies(moviesData);

        } catch (error) {
          console.error(error);
        }
      };
  
      fetchMovies();
    }, []);
  
    return (
      <div>
        <h1>Trending Now</h1>
        <ul>
          {movies.map((movie) => {
              return (
                <li key={movie.id}>
                  <Link to={`/movie/${movie.id}`} id={movie.id}>
                    {movie.title}
                  </Link>
                </li>
              )
          })}
        </ul>
      </div>
    );
  }

export default Home;
