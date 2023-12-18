console.log('Client side javascript file is loaded!')

const movieForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');


movieForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const movieName = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';


    fetch(`http://localhost:5000/index?movieid=${encodeURIComponent(movieName)}`)
        .then((response) => response.json())
        .then((data) => {

            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = `Movie Title: ${data.movieInfo.title}`;
                messageTwo.textContent = `Movie ID: ${data.movieInfo.id}`;

                // Display similar movies
                const similarMoviesList = document.createElement('ul');

                if (data.similarMovies && Array.isArray(data.similarMovies)) {
                    data.similarMovies.forEach((movie) => {
                        const listItem = document.createElement('li');
                        listItem.innerHTML = `<strong>${movie.title}</strong> (${movie.release_date})<br>
                            <img src="${movie.poster_path}"  width="100">
                            <p>${movie.overview}</p>`;
                        similarMoviesList.appendChild(listItem);
                    });

                // if (data.similarMovies && Array.isArray(data.similarMovies)) {
                //     data.similarMovies.forEach((movie) => {
                //         const listItem = document.createElement('li');
                //         listItem.textContent = movie.title;
                //         similarMoviesList.appendChild(listItem);
                //     });
                } else {
                    // Handle the case where data.similarMovies is not an array or is undefined
                    const errorListItem = document.createElement('li');
                    errorListItem.textContent = 'No similar movies found.';
                    similarMoviesList.appendChild(errorListItem);
                }
                // if (Array.isArray(data.similarMovies)) {
                //     data.similarMovies.forEach((movie) => {
                //         const listItem = document.createElement('li');
                //         listItem.textContent = movie.title;
                //         similarMoviesList.appendChild(listItem);
                //     });
                // } else {
                //     // Handle the case where data.similarMovies is not an array
                //     console.error('Invalid or missing similarMovies data:', data.similarMovies);
                // }
                // data.similarMovies.forEach((movie) => {
                //     const listItem = document.createElement('li');
                //     listItem.textContent = movie.title;
                //     similarMoviesList.appendChild(listItem);
                // });
                const similarMoviesContainer = document.getElementById('similar-movies');
                similarMoviesContainer.innerHTML = ''; // Clear previous content
                similarMoviesContainer.appendChild(similarMoviesList);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
















































// console.log('Client-side JavaScript file is loaded!');

// const movieForm = document.querySelector('form'); // Corrected variable name
// const search = document.querySelector('input');
// const messageOne = document.querySelector('#message-1');
// const messageTwo = document.querySelector('#message-2');

// movieForm.addEventListener('submit', (e) => { // Corrected event listener variable name
//     e.preventDefault();

//     const movie = search.value;

//     messageOne.textContent = 'Loading...';
//     messageTwo.textContent = '';

//     fetch('http://localhost:8080/movies/' + movie).then((response) => { // Corrected fetch URL
//         response.json().then((data) => {
//             if (data.error) {
//                 messageOne.textContent = data.error;
//             } else {
//                 messageOne.textContent = data.movieInfo.title; // Assuming you have a property called "title" in your movieInfo
//                 messageTwo.textContent = data.movieInfo.id; // Assuming you have a property called "id" in your movieInfo
//             }
//         });
//     });
// });


// console.log('Client side javascript file is loaded!')

// const movieForm = document.querySelector('form');  // Corrected variable name
// const search = document.querySelector('input');
// const messageOne = document.querySelector('#message-1');
// const messageTwo = document.querySelector('#message-2');

// movieForm.addEventListener('submit', (e) => {  // Corrected event listener variable name
//     e.preventDefault();

//     const movie = search.value;

//     messageOne.textContent = 'Loading...';
//     messageTwo.textContent = '';

    // fetch('http://localhost:5000/index?movieid=' + movie).then((response) => {  // Corrected fetch URL
//         response.json().then((data) => {
//             if (data.error) {
//                 messageOne.textContent = data.error;
//             } else {
//                 messageOne.textContent = data.movieInfo.title;  // Assuming you have a property called "title" in your movieInfo
//                 messageTwo.textContent = data.movieInfo.id;  // Assuming you have a property called "id" in your movieInfo
//             }
//         });
//     });
// });

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

////////////////////

// movieForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const movieName = search.value; 

//     messageOne.textContent = 'Loading...';
//     messageTwo.textContent = '';

//     fetch(`http://localhost:5000/index?movieid=${encodeURIComponent(movieName)}`) 
//         .then((response) => response.json())
//         .then((data) => {
//             if (data.error) {
//                 messageOne.textContent = data.error;
//             } else {
//                 messageOne.textContent = `Movie Title: ${data.movieInfo.title}`;
//                 messageTwo.textContent = `Movie ID: ${data.movieInfo.id}`;
//             }
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         })})


// movieForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const movieName = search.value;

//     messageOne.textContent = 'Loading...';
//     messageTwo.textContent = '';

//     fetch(`http://localhost:5000/index?movieid=${encodeURIComponent(movieName)}`)
//         .then((response) => response.json())
//         .then((data) => {
//             if (data.error) {
//                 messageOne.textContent = data.error;
//             } else {
//                 messageOne.textContent = `Movie Title: ${data.movieInfo.title}`;
//                 messageTwo.textContent = `Movie ID: ${data.movieInfo.id}`;

//                 // Display similar movies
//                 const similarMoviesList = document.createElement('ul');
//                 data.similarMovies.forEach((movie) => {
//                     const listItem = document.createElement('li');
//                     listItem.textContent = movie.title;
//                     similarMoviesList.appendChild(listItem);
//                 });
//                 document.body.appendChild(similarMoviesList);
//             }
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// });

