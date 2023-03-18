Create a React app that displays a list of movies and allows the user to filter them by genre.
The app should include the following components:

App: The root component that renders everything else.
MovieList: A component that displays a table of movies.
GenreFilter: A component that displays a list of genre filter buttons.

Use the following array of movies:

const movies = [ { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 }, { title: 'The Godfather', genre: 'Crime', year: 1972 }, { title: 'The Dark Knight', genre: 'Action', year: 2008 }, { title: '12 Angry Men', genre: 'Drama', year: 1957 }, { title: 'Schindler's List', genre: 'Drama', year: 1993 }, { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', year: 2003 }, { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966 }, { title: 'Forrest Gump', genre: 'Drama', year: 1994 }, { title: 'Inception', genre: 'Science Fiction', year: 2010 }, { title: 'The Matrix', genre: 'Science Fiction', year: 1999 }, { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991 }, { title: 'Saving Private Ryan', genre: 'War', year: 1998 }, { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993 }, { title: 'Terminator 2: Judgment Day', genre: 'Science Fiction', year: 1991 }, { title: 'The Lion King', genre: 'Animation', year: 1994 } ];

The MovieList component should display a table with columns for Title, Genre, and Year. Each row should display a single movie object from the movies array.

Pass the movies array into the MovieList as props and then map the array inside table as the UI shows. Mapping is mandatory.
The GenreFilter component should display a list of genre filter buttons based on the genres present in the movies array. Here’s the genres array -

const genres = [ "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation", ];

Pass this array as a prop from App.js into the GenreFilter.js component and map the array to buttons as shown in the UI. Once the button is clicked console.log the genre which has been selected. Clicking a button should log a message to the console indicating that the user has selected that genre button.
