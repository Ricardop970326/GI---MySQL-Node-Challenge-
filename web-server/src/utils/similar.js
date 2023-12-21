const fetch = require('node-fetch');

const getSimilarMovies = (movieid, callback) => {
    const url = `https://api.themoviedb.org/3/movie/${movieid}/similar?language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs' // Replace with your actual API key
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log('Received data in getSimilarMovies:', json); // Add this line for debugging
            callback(undefined, json);
        })
        .catch(err => callback(err));

        
};

module.exports = getSimilarMovies;

