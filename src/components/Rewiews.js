import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const { movieId } = useParams();
    const [ movie , setMovie ] = useState(null);

    useEffect(() => {
      const fetchRewievsDetails = async () => {
        if(!movieId) return;
        try {
          const r = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US` ,
            {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWNiZTlkZTY0MTI4OTM1OTE2YWUzNzRkMGNkNjA3NyIsInN1YiI6IjY0OTRhMDg4MzkxYjljMDBlODFiYTQzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iTONktEdz4gCVm1GJD3NRI0zRCn5BZSM2hjCzfl__jc'
              }
            }
            );
            const result = await r.json();
            setMovie(result);
        
        } catch (error) {
          console.error(error);
        }
      };

    fetchRewievsDetails();
  }, [movieId]);

  if(!movie) {
    return <div>Loading...</div>
  }

  return (
    <>
      {movie.results.length > 0 ? (
        <ul>
          {movie.results.map((result) => (
            <li key={result.id}>
              <h3>Author: {result.author}</h3>
              <div>{result.content}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>Нажаль ми не знайшли інформації</div>
      )}
    </>
  )
}

export default Reviews;

// const options = {
  // method: 'GET',
  // headers: {
  //   accept: 'application/json',
  //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWNiZTlkZTY0MTI4OTM1OTE2YWUzNzRkMGNkNjA3NyIsInN1YiI6IjY0OTRhMDg4MzkxYjljMDBlODFiYTQzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iTONktEdz4gCVm1GJD3NRI0zRCn5BZSM2hjCzfl__jc'
  // }
// };

// fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US',)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));