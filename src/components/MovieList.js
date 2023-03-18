import React from 'react';

function MovieList({ movies }) {
    // If there are no movies in the array, return a message
    //used simple truthy value function for that.
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
//       {movies.map(() => (
//        console.log(movies)  
//             <tc>{movie.title}</tc>
//             <tr>{movie.genre}</tr>
//             <td>{movie.year}</td>

//         ))}

        {/* Map over the movies array and create a row for each movie 
        printing title, genre and year as asked to using expression
        */}
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
