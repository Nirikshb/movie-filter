import React from 'react';


//taking in two props genres, onGenreSelect
const GenreFilter = ({ genres, onGenreSelect }) => {
  return (
    // printing using map function on here with
    // onclick function 
    //the key=genre should be used after map function to efficently update
    //render etc etc.
    //the key prop needs to be set to a unquie key as mentioned.
    <div className='genre-filter'>
      <h2>Filter by Genre:</h2>
      {genres.map((genre) => (
        <button className='genre-button' key={genre} onClick={() => onGenreSelect(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
