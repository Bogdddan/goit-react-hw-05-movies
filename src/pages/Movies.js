import { useState } from "react";

const Movies = () => {

  const [ searchQuery , setSearchQuery ] = useState('');
  
  const handleQueryChange = event => {
    setSearchQuery( event.currentTarget.value.toLowerCase() );
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      throw new Error(Error.message)
    }
    setSearchQuery(searchQuery);
  };

    return <>
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
}

export default Movies