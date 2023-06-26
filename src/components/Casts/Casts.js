import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import css from './Casts.module.css';

const Casts = () => {

  const { movieId } = useParams();
  const [casts , setCasts] = useState(null)
  
  useEffect (() => {
    const fetchCasts = async () => {
      if(!movieId) return;
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          {
            method: 'GET',
              headers: {
              accept: 'application/json',
              Authorization: 
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWNiZTlkZTY0MTI4OTM1OTE2YWUzNzRkMGNkNjA3NyIsInN1YiI6IjY0OTRhMDg4MzkxYjljMDBlODFiYTQzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iTONktEdz4gCVm1GJD3NRI0zRCn5BZSM2hjCzfl__jc'
            },
          }
        );
        const dataCasts = await res.json();
    
        setCasts(dataCasts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCasts();
  }, [movieId]);

  if(!casts){
    return <div>Loading...</div>
  }

  return (
    <div>
      <ul>
        {casts.cast.map((author) => (
          <li key={author.id} className={css.info}>
            {author.name}
            <img 
              src={`https://image.tmdb.org/t/p/w500${author.profile_path}`}
              alt={author.name}
              className={css.auhorPhoto}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Casts;

// method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWNiZTlkZTY0MTI4OTM1OTE2YWUzNzRkMGNkNjA3NyIsInN1YiI6IjY0OTRhMDg4MzkxYjljMDBlODFiYTQzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iTONktEdz4gCVm1GJD3NRI0zRCn5BZSM2hjCzfl__jc'
//         }

// fetch(`https://api.themoviedb.org/3/movie/${castId}/credits?language=en-US`, options)
      // .then(response => console.log(response))
      // .catch(err => console.error(err));
      // .then(response => response.json())


      // тут буде map звідси візьму інформацію

      // {casts.map((cast) => {
      //   return (
      //   <li key={cast.id}>
      //   <p>Name film: {cast.charter}</p>
      //   <p>Author: {cast.name}</p>
        
      //   </li>
      // })}


    //тут код з папки home але він шось не працює подивитись сюда 

    // <ul>
    //       {casts.map((movie) => {
    //           return (
    //             <li key={movie.id}>
                  
    //                 <div>{movie.title}</div>
    //                 <div>{movie.charter}</div>
    //                 <p>Author: {movie.name}</p>
    //             </li>
    //           )
    //       })};
    //     </ul>