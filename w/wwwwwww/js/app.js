document.getElementById('searchForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const searchInput = document.getElementById('searchInput').value;
    const response = await fetch(`/search?query=${searchInput}`);
    const data = await response.json();
  
    const searchResultDiv = document.getElementById('searchResult');
    searchResultDiv.innerHTML = '';
  
    if (data.length === 0) {
      const noResultsMessage = document.createElement('p');
      noResultsMessage.textContent = 'No results found.';
      searchResultDiv.appendChild(noResultsMessage);
      return;
    }
  
    const movieList = document.createElement('ul');
    data.forEach(movie => {
      const movieItem = document.createElement('li');
      movieItem.textContent = movie.title;
      movieList.appendChild(movieItem);
    });

})



// document.getElementById('searchForm').addEventListener('submit', async function (event) {
//     event.preventDefault();
  
//     const searchInput = document.getElementById('searchInput').value;
//     const response = await fetch(`/search?query=${searchInput}`);
// //     const data = await response.json();
  
// //     const searchResultDiv = document.getElementById('searchResult');
// //     searchResultDiv.innerHTML = '';
  
// //     data.forEach(movie => {
// //       const movieTitle = document.createElement('p');
// //       movieTitle.textContent = movie.title;
// //       searchResultDiv.appendChild(movieTitle);
// //     });
// //   });

// document.getElementById('searchForm').addEventListener('submit', async function (event) {
//     event.preventDefault();
  
//     const searchInput = document.getElementById('searchInput').value;
//     const response = await fetch(`/search?query=${searchInput}`);
//     const data = await response.json();
  
//     const searchResultDiv = document.getElementById('searchResult');
//     searchResultDiv.innerHTML = '';
  
//     data.forEach(movie => {
//       const movieDiv = document.createElement('div');
//       movieDiv.classList.add('movie');
  
//       const title = document.createElement('p');
//       title.textContent = movie.title;
  
//       const overview = document.createElement('p');
//       overview.textContent = movie.overview;
  
//       movieDiv.appendChild(title);
//       movieDiv.appendChild(overview);
  
//       searchResultDiv.appendChild(movieDiv);
//     });
//   });