const https = require('https');
// const http = require('http');
const request = require('request');
var rp = require('request-promise')
//rp.debug = true;
const express = require('express')
var bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
// var fs = require('fs');

// var options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('key-cert.pem')
// }; 
// https.createServer(options, function (req, res) {
//     res.writeHead(200);
//     res.end("hello world\n");
//   }).listen(3001);
// const azureKey = require('./config/azureKey');
// const config = require('./config/config');
const SUBSCRIPTION_KEY = "f1d2030733cf4ba9bff12cad930da37d" ;
if (!SUBSCRIPTION_KEY) {
  throw new Error('Missing the AZURE_SUBSCRIPTION_KEY environment variable')
}
app.post('/layout', function(req,res) {

      if(!req.body.source){
          res.send("Please enter a request body url parameter of the form .json, .pdf, .jpg or .png ", 400)
      }  
      
      var options = {
        method: 'POST',
        uri: 'https://recogform1.cognitiveservices.azure.com/formrecognizer/v2.0/layout/analyze',
        headers: {
            'Ocp-Apim-Subscription-Key': 'f1d2030733cf4ba9bff12cad930da37d',
            'Content-Type': 'application/json' 
        },
        // body: {
        //     source: req.body.source
        // },
         body: { source: req.body.source },
        json: true // Automatically stringifies the body to JSON
        ,
        transform: function(body, response, resolveWithFullResponse) {
            return {'headers': response.headers, 'data': body};
          }
          
    };
    
    rp(options)
    .then(function (response) {
        console.log(response.headers);
        // console.log(response.data);
        // POST succeeded...
        res.send(response.headers)
    })
    .catch(function (err) {
        // POST failed...
        console.log("ERR: ", err);
    });
});

app.get('/layout/:id', function(req,res) {
        
          
          
          
          var options = {
            method: 'GET',
            uri: 'https://recogform1.cognitiveservices.azure.com/formrecognizer/v2.0/layout/analyzeResults/'+[req.params.id],
                        headers: {
                'Ocp-Apim-Subscription-Key': 'f1d2030733cf4ba9bff12cad930da37d',
                'Content-Type': 'application/json' 
            },
            
            json: true // Automatically stringifies the body to JSON
            ,
            transform: function(body, response, resolveWithFullResponse) {
                return {'headers': response.headers, 'data': body};
              }
              
        };
        
        rp(options)
        .then(function (response) {
            console.log(response.headers);
            res.send(response.data)
            // res.send(response.json)
        })
        .catch(function (err) {
            // POST failed...
            console.log("ERR: ", err);
        });

    
 });

 app.post('/receipt', function(req,res) {

    if(!req.body.source){
        res.send("Please enter a request body url parameter of the form .json, .pdf, .jpg or .png ", 400)
    } 
  
    console.log(req.body.source)
    var options = {
      method: 'POST',
      uri: 'https://recogform1.cognitiveservices.azure.com/formrecognizer/v2.0/prebuilt/receipt/analyze',
      headers: {
          'Ocp-Apim-Subscription-Key': 'f1d2030733cf4ba9bff12cad930da37d',
          'Content-Type': 'application/json' 
      },
      // body: {
      //     source: req.body.source
      // },
       body: { source: req.body.source },
      json: true // Automatically stringifies the body to JSON
      ,
      transform: function(body, response, resolveWithFullResponse) {
          return {'headers': response.headers, 'data': body};
        }
        
  };
  
  rp(options)
  .then(function (response) {
      console.log(response.headers);
      // console.log(response.data);
      // POST succeeded...
      res.send(response.headers)
  })
  .catch(function (err) {
      // POST failed...
      console.log("ERR: ", err);
  });
});

app.get('/receipt/:id', function(req,res) {
        
    console.log("flsjdhfdih")
    
    
    var options = {
      method: 'GET',
      uri: 'https://recogform1.cognitiveservices.azure.com/formrecognizer/v2.0/prebuilt/receipt/analyzeResults/'+[req.params.id],
                  headers: {
          'Ocp-Apim-Subscription-Key': 'f1d2030733cf4ba9bff12cad930da37d',
          'Content-Type': 'application/json' 
      },
      
      json: true // Automatically stringifies the body to JSON
      ,
      transform: function(body, response, resolveWithFullResponse) {
          return {'headers': response.headers, 'data': body};
        }
        
  };
  
  rp(options)
  .then(function (response) {
      console.log(response.headers);
      res.send(response.data)
      // res.send(response.json)
  })
  .catch(function (err) {
      // POST failed...
      console.log("ERR: ", err);
  });


});

app.listen(3001);
