'use strict';


const express = require('express');
require('dotenv').config();
const axios = require('axios');   

const data = require('./data.json');
const cors = require('cors');
// server.use(express.json())
const server = express();
server.use(cors());

server.get('/', handelGet )
server.get('/trending', handeltrending )
server.get('/The Whole Truth', handelfav )

server.get('/favorite', handelGet )
server.get('*', handelerror )
server.get(handelAllerror)

let url =`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API}&language=en-US`


function trendinginfo(id, title, release_date, poster_path, overview ){
    this.id = id;
    this.title = title;
    this.release_date = release_date;
    this.poster_path = poster_path;
    this.overview = overview;

}


function handeltrending (req,res){
    let newArr = [];
    axios.get(url)
     .then(result=>{
         console.log(result.data.results);
         result.data.results.forEach(element => {
             switch(element.id){
                case 634649:
                    console.log("done");
            newArr.push(new trendinginfo(element.id,element.title,element.release_date,element.overview));
             }
         });
         res.status(200).json(newArr);
        }).catch(err=>{

        })
    }

    function handelfav (req,res){
        let newArr2 = [];
        axios.get(url)
         .then(result=>{
             console.log(result.data.results);
             result.data.results.forEach(element => {
                 switch(element.id){
                    case 895001:
                        console.log("done");
                newArr2.push(new trendinginfo(element.id,element.title,element.release_date,element.overview));
                 }
             });
             res.status(200).json(newArr2);
            }).catch(err=>{
    
            })
        }




function handelerror(request,response){
     response.status(404).send("error")
}

function handel(request,response){
     response.status(200).send("Welcome to Favorite Page")
}


 
function handelGet(request,response){
    console.log("test");
   return response.status(200).json(data)

}

function handelAllerror (req,res){
    return res.status(500).json("error")
}



server.listen(3008,()=>{
    console.log("my server is listining to port 3000");
})


