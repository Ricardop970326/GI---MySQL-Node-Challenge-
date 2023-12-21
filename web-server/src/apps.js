const path = require('path');
const express = require('express');
const hbs = require('hbs');
const getMovieDetails = require('./utils/movies');  // Adjusted import
const getSimilarMovies = require('./utils/similar');  // Adjusted import

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'index',
        name: 'Ricardo'
    });
});

app.get('/index', (req, res) => {
    if (!req.query.movieid) {
        return res.send({
            error: 'You must provide a movie!'
        });
    }

    getMovieDetails(req.query.movieid, (err, movieRes) => {
        if (err) {
            return res.send({ error: err.message });
        }

        getSimilarMovies(movieRes.movieid, (err, simRes) => {
            if (err) {
                return res.send({ error: err.message });
            }

            // Send the relevant movie information in the response
            res.send({
                movieInfo: {
                    title: movieRes.name,  // Correct property name
                    id: movieRes.movieid,    // Correct property name
                    id: movieRes.poster_path
                },
                similarMovies: simRes.results  // Include other relevant data if needed
            });
        });
    });
});

app.listen(5000, () => {
    console.log('Server is on port 5000');
});
