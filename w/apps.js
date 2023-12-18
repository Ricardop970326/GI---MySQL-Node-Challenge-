
const path = require('path');
const express = require('express');
const fetch = require('node-fetch');
const hbs = require('hbs');
const app = express();

const port = 3000;

app.use(express.static('public'));
// Set up Handlebars as the view engine
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname));

// Define the route for rendering index.hbs
// app.get('/', async (req, res) => {
//   try {
//     // Use movie.js to search for movies (modify the query as needed)
//     const movieResponse = await fetch('https://api.themoviedb.org/3/search/movie?query=AVATAR&include_adult=false&language=en-US&page=1', {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs'
//       }
//     });
    
//     const movieData = await movieResponse.json();
    
//     // Extract movie ID from the first result (modify as needed)
//     const movieId = movieData.results[0].id;

//     // Use similar.js with the obtained movie ID
//     const similarResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`, {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs'
//       }
//     });

//     const similarMovies = await similarResponse.json();

//     // Render index.hbs and pass similarMovies to the template
//     res.render('index', { similarMovies: similarMovies.results });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Internal Server Error: ' + error.message);
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.get('/', async (req, res) => {
  const query = req.query.query; // Get the search query from the URL
  const apiKey = 'YOUR_TMDB_API_KEY'; // Replace with your TMDb API key

  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs',
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});