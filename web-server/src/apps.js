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
                    id: movieRes.movieid    // Correct property name
                },
                similarMovies: simRes.results  // Include other relevant data if needed
            });
        });
    });
});

app.listen(5000, () => {
    console.log('Server is on port 5000');
});





















































// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')
// const movies = require('./utils/movies')
// const simMovie = require('./utils/similar')

// console.log(__dirname)

// const app = express()
// const publicDirectoryPath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates/views')
// const partialsPath = path.join(__dirname, '../templates/partials')

// app.set('view engine', 'hbs')
// app.set('views', viewsPath)
// hbs.registerPartials(partialsPath)

// app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//     res.render('index', {
//     title: 'index',
//     name: 'Ricardo'
// })
// })


// app.get('/index', (req, res) => {
//     if (!req.movieid) {
//         return res.send({
//             error: 'You must provide a movie!'
//         })
//     }

// movies('Avatar',(err,res)  => {
//         if (err) {
//             return res.send({ err })
//         }

//         simMovie(res.movieid,(err, res) => {
//             if (err) {
//                 return res.send({ err})
//             }
//             console.log(res.results)
//         })
//     })
// })


// app.get('/index/*', (req, res) => {
//     res.render('404', {
//         title: '404',
//         name: 'Ricardo',
//         errorMessage: 'Search not found'
//     })
// })

// app.get('*', (req, res) => {
//     res.render('404', {
//         title: '404',
//         name: 'Ricardo',
//         errorMessage: 'Search not found'
//     })
// })

// app.listen(5000, () => {
//     console.log('Server is on port 5000')
// })



// app.get('/index', (req, res) => {
//     if (!req.query.movieid) {
//         return res.send({
//             error: 'You must provide a movie!'
//         });
//     }

//     getMovieDetails(req.query.movieid, (err, movieRes) => {  // Consistent use of err variable name
//         if (err) {
//             return res.send({ error: err.message });
//         }
//         res.send({
//             movieInfo: {
//                 title: movieRes.title,  // Replace with the actual title property
//                 id: movieRes.movieid    // Replace with the actual id property
//             },
//             similarMovies: simRes.results  // Include other relevant data if needed
//         });

        // getSimilarMovies(movieRes.movieid, (err, simRes) => {  // Consistent use of err variable name
        //     if (err) {
        //         return res.send({ error: err.message });
        //     }
        //     console.log(simRes.results);
        // });
//     });
// });

// Other routes remain unchanged...

