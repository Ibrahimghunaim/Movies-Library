'use strict';

const error= require('./.eslintrc.json ');
const express = require('express');   

const data = require('./Movies-Library/data.json');
const cors = require('cors');

const server = express();
server.use(cors());

server.get('/', handelGet )
server.get('/favorite', handelGet )
server.get('*', handelerror )
server.get(handelAllerror)
function handelerror(request,response){
    return response.status(404).send("error")
}

function handel(request,response){
    return response.status(200).send("Welcome to Favorite Page")
}


 
function handelGet(request,response){
    console.log("test");
   return response.status(200).json(data)

}

function handelAllerror (req,res){
    return response.status(500).json("error")
}



server.listen(3008,()=>{
    console.log("my server is listining to port 3000");
})


