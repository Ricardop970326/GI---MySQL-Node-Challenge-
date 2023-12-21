console.log('Client side javascript file is loaded!')

const movieForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');


movieForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const movieName = search.value;

    messageOne.textContent = 'Loading...';
    messageTwo.innerHTML = '';


    fetch(`http://localhost:5000/index?movieid=${encodeURIComponent(movieName)}`)
        .then((response) => response.json())
        .then((data) => {

            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = `Movie Title: ${data.movieInfo.title}`;
                messageTwo.innerHTML = `<img src="https://image.tmdb.org/t/p/original${data.movieInfo.poster_path}"  width="200">`;
                
                // Display similar movies
                const similarMoviesList = document.createElement('ul');

                if (data.similarMovies && Array.isArray(data.similarMovies)) {
                    data.similarMovies.forEach((movie) => {
                        const listItem = document.createElement('li');
                        listItem.innerHTML = `<strong>${movie.title}</strong> (${movie.release_date})<br>
                            <img src="https://image.tmdb.org/t/p/w185${movie.poster_path}"  width="200">
                            <p>${movie.overview}</p>`;
                        similarMoviesList.appendChild(listItem);
                    });


                } else {
                    // Handle the case where data.similarMovies is not an array or is undefined
                    const errorListItem = document.createElement('li');
                    errorListItem.textContent = 'No similar movies found.';
                    similarMoviesList.appendChild(errorListItem);
                }
             
                const similarMoviesContainer = document.getElementById('similar-movies');
                similarMoviesContainer.innerHTML = ''; // Clear previous content
                similarMoviesContainer.appendChild(similarMoviesList);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});