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

// /////////////////////


// fetch(`http://localhost:5000/index?movieid=${encodeURIComponent(movieName)}`)
//     .then((response) => response.json())
//     .then((data) => {
//         if (data.error) {
//             messageOne.textContent = data.error;
//         } else {
//             messageOne.textContent = `Movie Title: ${data.movieInfo.title}`;
//             messageTwo.textContent = `Movie ID: ${data.movieInfo.id}`;

//             // Display similar movies
//             const similarMoviesList = document.createElement('ul');
//             data.similarMovies.forEach((movie) => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = movie.title;
//                 similarMoviesList.appendChild(listItem);
//             });

//             // Clear existing content in the 'similar-movies' div
//             const similarMoviesDiv = document.getElementById('similar-movies');
//             similarMoviesDiv.innerHTML = '';

//             // Append the list of similar movies to the 'similar-movies' div
//             similarMoviesDiv.appendChild(similarMoviesList);
//         }
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });


// // Import necessary modules
// const express = require('express');
// const axios = require('axios');

// // Create an Express app
// const app = express();
// const port = 3000;

// // Set up middleware to parse JSON requests
// app.use(express.json());

// // Define the API endpoint to get similar movies



















































// const fetch = require('node-fetch');

// const getSimilarMovies = (movieid, callback) => {
//     const url = `https://api.themoviedb.org/3/movie/${movieid}/similar?language=en-US&page=1`;
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs' // Replace with your actual API key
//         }
//     };

//     fetch(url, options)
//         .then(res => res.json())
//         .then(json => {
//             console.log('Received data in getSimilarMovies:', json); // Add this line for debugging

//             // Extract and send only the necessary properties
//             const simplifiedResults = json.results.map(movie => ({
//                 title: movie.title,
//                 release_date: movie.release_date,
//                 poster_path: movie.poster_path,
//                 overview: movie.overview
//             }));

//             // Log the simplified results to the terminal
//             console.log(simplifiedResults);

//             callback(undefined, simplifiedResults);
//         })
//         .catch(err => callback(err));
// };

// const getMovieDetails = (movieid, callback) => {
//     const url =`https://api.themoviedb.org/3/movie/${movieid}?language=en-US`;
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs' // Replace with your actual API key
//         }
//     };

//     fetch(url, options)
//         .then(res => res.json())
//         .then(json => {
//             console.log('Received data in getMovieDetails:', json); // Add this line for debugging
//             callback(undefined, {
//                 title: json.title,
//                 release_date: json.release_date,
//                 poster_path: json.poster_path,
//                 overview: json.overview
//             });
//         })
//         .catch(err => callback(err));
// };

// module.exports = {
//     getSimilarMovies,
//     getMovieDetails
// };









// const fetch = require('node-fetch');

// const getSimilarMovies = (movieid, callback) => {
//     const url = `https://api.themoviedb.org/3/movie/${movieid}/similar?language=en-US&page=1`;
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs' // Replace with your actual API key
//         }
//     };


//     fetch(url, options)
//         .then(res => res.json())
//         .then(json => {
//             console.log('Received data in getSimilarMovies:', json); // Add this line for debugging

//             // Extract and send only the necessary properties
//             const simplifiedResults = json.results.map(movie => ({
//                 title: movie.title,
//                 release_date: movie.release_date,
//                 poster_path: movie.poster_path,
//                 overview: movie.overview
//             }));

//             // Log the simplified results to the terminal
//             console.log(simplifiedResults);

//             callback(undefined, simplifiedResults);
//         })
//         .catch(err => callback(err));
// };

// module.exports = {
//     getSimilarMovies
// };



















// const fetch = require('node-fetch');

// // Function to get movie details by name
// const getMovieDetails = (movieName, callback) => {
//     const encodedMovieName = encodeURIComponent(movieName);
//     const url = `https://api.themoviedb.org/3/search/movie?query=${encodedMovieName}&include_adult=false&language=en-US&page=1`;

//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs' // Replace with your actual API key
//         }
//     };

//     fetch(url, options)
//         .then(res => res.json())
//         .then(json => {
//             console.log('Received data in getMovieDetails:', json); // Add this line for debugging

//             callback(undefined, {
//                 title: json.results[0].title,
//                 movieid: json.results[0].id
//             });
//         })
//         .catch(err => callback(err));
// };

// // Function to get similar movies by movie ID
// const getSimilarMovies = (movieid, callback) => {
//     const url = `https://api.themoviedb.org/3/movie/${movieid}/similar?language=en-US&page=1`;
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs' // Replace with your actual API key
//         }
//     };

//     fetch(url, options)
//         .then(res => res.json())
//         .then(json => {
//             console.log('Received data in getSimilarMovies:', json); // Add this line for debugging

//             // Extract and send only the necessary properties
//             const simplifiedResults = json.results.map(movie => ({
//                 title: movie.title,
//                 release_date: movie.release_date,
//                 poster_path: movie.poster_path,
//                 overview: movie.overview
//             }));

//             // Log the simplified results to the terminal
//             console.log(simplifiedResults);

//             callback(undefined, simplifiedResults);
//         })
//         .catch(err => callback(err));
// };

// module.exports = { getMovieDetails, getSimilarMovies };





///////////here



// const getSimilarMovies = (movieid, callback) => {
//     const url = `https://api.themoviedb.org/3/movie/${movieid}/similar?language=en-US&page=1`;
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs' // Replace with your actual API key
//         }
//     };

//     fetch(url, options)
//         .then(res => res.json())
//         .then(json => {
//             console.log('Received data in getSimilarMovies:', json); // Add this line for debugging

//             // Extract and send only the necessary information (name and description)
//             const simplifiedResults = json.results.map(movie => ({
//                 title: movie.title,
//                 description: movie.overview
//             }));

//             callback(undefined, simplifiedResults);
//         })
//         .catch(err => callback(err));
// };

// module.exports = getSimilarMovies;


// const getSimilarMovies = (movieid, callback) => {
//     const url = `https://api.themoviedb.org/3/movie/${movieid}/similar?language=en-US&page=1`;
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs'  // Replace with your actual API key
//         }
//     };

//     fetch(url, options)
//         .then(res => res.json())
//         .then(json => {
//             console.log('Received data in getSimilarMovies:', json); // Add this line for debugging

//             // Extract and send only the necessary properties
//             const simplifiedResults = json.results.map(movie => ({
//                 title: movie.title,
//                 release_date: movie.release_date,
//                 poster_path: movie.poster_path,
//                 overview: movie.overview
//             }));

//             // Log the simplified results to the terminal
//             console.log(simplifiedResults);

//             callback(undefined, simplifiedResults);
//         })
//         .catch(err => callback(err));
// };

// module.exports = getSimilarMovies;














// const fetch = require('node-fetch');

// const simMovie = (movieid, callback) => {
//     const url = 'https://api.themoviedb.org/3/movie/' + movieid + '/similar?language=en-US&page=1';
//     const options = {
//               method: 'GET',
//               headers: {
//                 accept: 'application/json',
//                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs'
//               }
//             };

//                fetch(url, options)
//                   .then(res => res.json())
//                   .then(json =>{
//                     callback(undefined,json.results)
//                     console.log(json.results)
//                   } 
//                   )
//                   .catch(err => console.error('error:' + err));
//             }

// module.exports = simMovie





// function simMovie(movieid, callback){
//     const url = 'https://api.themoviedb.org/3/movie/'+movieid+'/similar?language=en-US&page=1';
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs'
//       }
//     };
    
//     fetch(url, options)
//       .then(res => res.json())
//       .then(json =>{
//         callback(undefined,json.results)
//         console.log(json.results)
//       } 
//       )
//       .catch(err => console.error('error:' + err));
// }

// movies('Avatar',(err,res)=>{
//     if(err){
//        return console.log('Movie err')
//     }
//     simMovie(res.movieid,(err, res)=>{
//         if(err){
//             return console.log('simMovie err')
//         }
//         console.log(res.results)
//     })
// })