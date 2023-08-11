const express = require("express");
const app = express();
const PORT= 5000
const fruits = require('./models/fruits');

//-----------middleware----

app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());


app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});


app.get('/fruits', (req, res)=>{
    res.render("Index",{fruits: fruits});
});


app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    console.log(fruits);
    res.send('data received');
});




app.get('/fruits/:indexOfFruitsArray', (req,res)=>{
    res.render('Show', {
        fruit: fruits[req.params.indexOfFruitsArray]
    })
})

// ---show each fruit----------




app.listen(PORT, (req, res)=>{
    console.log(`listening on port ${PORT}`)
});

//-----server
