const express = require('express');
const fetch = require("node-fetch"); // fetch ain't native to Node so , npm i node-fetch and bring it in.


const md5 = require('md5'); //required for hashing the timestamp, private key, and public key for Marvel's API


const router = express.Router();
router.get('/test', (req, res)=>res.json({msg: 'MARVEL API ROUTE WORKS'}));


router.get('/marvel-comics' , (req,res)=>{

    const ts = '1';
    const apikey = process.env.MARVEL_PUBLIC_KEY;
    const privateApiKey = process.env.MARVEL_PRIVATE_KEY;

    let hash = md5(ts+privateApiKey+apikey); //Take note of the order : has to be ts=1, private key , apikey: Will not work if incorrect order

    const BaseURL = 'http://gateway.marvel.com/v1/public';

    const url = BaseURL+`/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`;


    fetch(url).then((res)=>{
        return res.json() //    1.) use fetch to return JSON
    }).then((data)=>{
        return(data.data.results)   //  2.) Resolve promise and return the results array

    }).then((result)=>{
         res.send({ result : result}) //    3.) Make a final promise that resolves to send back the result arg via the res from the callback passed into router.get('/marvel-comics')
    });
});



module.exports = router; // don't forget to export