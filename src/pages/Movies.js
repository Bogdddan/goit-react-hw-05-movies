import React, { useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleQueryChange = (event) => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      throw new Error("Search query is empty");
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWNiZTlkZTY0MTI4OTM1OTE2YWUzNzRkMGNkNjA3NyIsInN1YiI6IjY0OTRhMDg4MzkxYjljMDBlODFiYTQzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iTONktEdz4gCVm1GJD3NRI0zRCn5BZSM2hjCzfl__jc",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(
        searchQuery
      )}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
      
        const moviesData = data.results.map(result => ({
          title: result.title,
          id: result.id
        }));
        setResult(moviesData);
        // console.log(moviesData);
        // setResult(data.results.map(movie => movie.title));
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div>Мультіки будуть тут</div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleQueryChange}
          value={searchQuery}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <span className="button-label">Search</span>
        </button>
      </form>
      <ul>
        {result.map((movie) =>{
          return (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
              {movie.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default Movies;
