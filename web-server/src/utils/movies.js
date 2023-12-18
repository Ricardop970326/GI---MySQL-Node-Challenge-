const fetch = require('node-fetch');

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



// module.exports = getMovieDetails;


const getMovieDetails = (movieName, callback) => {
    const encodedMovieName = encodeURIComponent(movieName);
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodedMovieName}&include_adult=false&language=en-US&page=1`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs' // Replace with your actual API key
        }
    };

    fetch(url, options)
        .then(res => res.json())
        // .then(json => {
        //     console.log('Received data in getMovieDetails:', json); // Add this line for debugging
        //     if (json.success === false) {
        //         // Log additional details for debugging
        //         console.error('Error details:', json.status_message);
        //         callback(new Error(json.status_message));
        //     } else {
        //         const movieDetails = {
        //             name: json.results[0].title,
        //             yearOfRelease: json.results[0].release_date,
        //             overview: json.results[0].overview,
        //             poster: json.results[0].poster_path
        //         };
        //         callback(undefined, movieDetails);
        //     }
        // })

        .then(json => {
            console.log('Received data in getMovieDetails:', json); // Add this line for debugging
            if (json.success === false) {
                // Log additional details for debugging
                console.error('Error details:', json.status_message);
                callback(new Error(json.status_message));
            } else {
                const movieDetails = {
                    name: json.results[0].title,
                    yearOfRelease: json.results[0].release_date,
                    overview: json.results[0].overview,
                    poster: json.results[0].poster_path,
                    poster: json.results[0].backdrop_path,
                    movieid: json.results[0].id
                };
                callback(undefined, movieDetails);
            }
        })


        // .then(json => {
        //     console.log('Received data in getMovieDetails:', json); // Add this line for debugging
        //     if (json.success === false) {
        //         // Log additional details for debugging
        //         console.error('Error details:', json.status_message);
        //         callback(new Error(json.status_message));
        //     } else {
        //         const movieDetails = {
        //             name: json.results[0].title,
        //             yearOfRelease: json.results[0].release_date,
        //             overview: json.results[0].overview,
        //             poster: json.results[0].poster_path,
        //             movieid: json.results[0].id
        //         };
        //         callback(undefined, movieDetails);
        //     }
        // })




        // .then(json => {
        //     const movieDetails = {
        //         name: json.results[0].title,
        //         yearOfRelease: json.results[0].release_date,
        //         overview: json.results[0].overview,
        //         poster: json.results[0].poster_path
        //     };
        //     callback(undefined, movieDetails);
        // })
        .catch(err => callback(err));
};

module.exports = getMovieDetails;































































// const fetch = require('node-fetch');

// const input = document.querySelector('input')


// const movies = (address, callback) => {
//   const movieName = input.value
//     const url = 'https://api.themoviedb.org/3/search/movie?query='+ movieName + '&include_adult=false&language=en-US&page=1'
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs'
//         }
// }
// fetch(url, options).then(res => res.json()).then(json => callback(undefined, {
//   movieid: json.results[0].id
// }))
// .catch(err => console.error('error:' + err));

// }

// module.exports = movies

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




// function movies(movieName,callback){
//     const url = 'https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => callback(undefined, {
//     movieid: json.results[0].id
//   }))
//   .catch(err => console.error('error:' + err));


// }

// const fetch = require('node-fetch');

// const getMovieDetails = (movieName, callback) => {
//     const encodedMovieName = encodeURIComponent(movieName);
//     const url = `https://api.themoviedb.org/3/search/movie?query=${encodedMovieName}&include_adult=false&language=en-US&page=1`;

//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs'
//         }
//     };

//     fetch(url, options)
//         .then(res => res.json())
//         .then(json => callback(undefined, {
//             movieid: json.results[0].id
//         }))
//         .catch(err => callback(err));
// };

// module.exports = getMovieDetails;
