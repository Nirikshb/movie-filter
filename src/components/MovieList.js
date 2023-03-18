import React from 'react';

function MovieList({ movies }) {
    // If there are no movies in the array, return a message
    if (!movies.length) {
      return <p>No movies found.</p>;
  }
// printing the data using table tag
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {/* Map over the movies array and create a row for each movie */}
        {movies.map((movie) => (
          <tr key={movie.title}>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MovieList;
