const path = require('path')
const express = require('express')

const express = express();

const fetch = require('node-fetch');
function movies(movieName,callback){
    const url = 'https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => callback(undefined, {
    movieid: json.results[0].id
  }))
  .catch(err => console.error('error:' + err));


}

function simMovie(movieid, callback){
    const url = 'https://api.themoviedb.org/3/movie/'+movieid+'/similar?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM1YzdlNDQ5MzM2ZjdlOTY5ODg5MDMxYTZkYmY0ZSIsInN1YiI6IjY1NzlkYzY4ZWEzOTQ5MDBmZWIwMWI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18qCCwxiuoLy6WPQIHkVSMbC7JHMjGgJu2oNqCHGCAs'
      }
    };
    
    fetch(url, options)
      .then(res => res.json())
      .then(json =>{
        callback(undefined,json.results)
        console.log(json.results)
      } 
      )
      .catch(err => console.error('error:' + err));
}

movies('Avatar',(err,res)=>{
    if(err){
       return console.log('Movie err')
    }
    simMovie(res.movieid,(err, res)=>{
        if(err){
            return console.log('simMovie err')
        }
        console.log(res.results)
    })
})

app.get('/index', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geoCode(req.query.address, (error, { latitude, longitude, location } = {} ) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.listen(8080, () => console.log('listening in port 8080'))