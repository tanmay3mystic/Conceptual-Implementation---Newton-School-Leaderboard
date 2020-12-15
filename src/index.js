const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
const { data } = require('./data')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
const isValid = (obj)=>obj!=null || obj!=undefined ; 

const middleWare = (req,res,next)=>{
    let {limit , offset} = req.query;
    req.query.limit = Number(limit)?Number(limit):20;
    req.query.offset = Number(offset)?Number(offset):0;
    next();
}
app.use(middleWare);

app.get("/topRankings",(req,res)=>{
    let {limit , offset} = req.query;
    const tempData = [...data];
    res.send(tempData.splice(offset,limit));
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
