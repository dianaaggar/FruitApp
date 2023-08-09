const express = require("express");

const app = express();

const PORT= 3005
const fruits = require('./models/fruits');

//-----------middleware----
app.set("view engine", "jsx");



app.get('/fruits', (req, res)=>{
    res.send(fruits);
});

//------- index => all fruit--

app.get('/fruits/:indexOfFruitsArray', (req,res)=>{
    res.send(fruits[req.params.indexOfFruitsArray]);
});

// ---show each fruit----------

app.listen(PORT, (req, res)=>{
    console.log(`listening on port ${PORT}`);
});

//-----server
