# Movie API Project

This project is a simple web application that allows users to search for movies and view similar movies based on a provided movie ID. It utilizes The Movie Database (TMDb) API to fetch movie details and similar movies.

## Features

- **Search**: Users can enter a movie ID to retrieve details about a specific movie.
- **Similar Movies**: Users can view a list of similar movies based on the selected movie.

## Technologies Used

- **Node.js**: The server-side code is written in Node.js to handle API requests and responses.
- **Express.js**: Express is used as the web application framework for Node.js to handle routing and middleware.
- **HTML/CSS/JavaScript**: Frontend components are built using HTML, CSS, and JavaScript to provide a user-friendly interface.
- **hbs (Handlebars.js)**: The templating engine hbs is used for server-side rendering of HTML pages.
- **node-fetch**: The node-fetch module is used for making HTTP requests to fetch data from the TMDb API.

## Setup

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the server: `npm start`
4. Access the application in your browser at `http://localhost:5000`

## Usage

1. Open your browser and navigate to the application URL.
2. Enter a movie ID in the search bar and click the "Search" button.
3. View the movie details and similar movies displayed on the webpage.

## API Documentation

- This project uses data from [The Movie Database (TMDb)](https://www.themoviedb.org/) API.

## Configuration

- Before running the application, make sure to obtain an API key from TMDb and configure it in the server-side code.

## Deployment

- This project can be deployed to a live server using platforms like Heroku, AWS, or Azure. Make sure to set up the necessary environment variables and configurations for deployment.

## Contributing

- Contributions to the project are welcome! Please follow the guidelines outlined in the CONTRIBUTING.md file.

## Testing

- Automated tests are available in the `tests` directory. Run `npm test` to execute the tests.

## Troubleshooting

- If you encounter any issues or have questions about the project, please open a GitHub issue or reach out to the project maintainers.

## Security

- Ensure that sensitive data such as API keys are handled securely. Avoid exposing sensitive information in the client-side code.

