import { useState } from "react";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [result , setResult] = useState([])

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
        const results = data.results;
        const paragraphs = results.map((result) => (
          <p key={result.id}>{result.title}</p>
        ));
        console.log(paragraphs);
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
    </>
  );
};

export default Movies;
