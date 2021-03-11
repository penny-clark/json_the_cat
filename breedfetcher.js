const request = require('request');
//const fs = require('fs');
const breedQuery = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];

const breedFetcher = function(breedQuery, callback) {
  request(breedQuery, (error, response, body) => {
    console.log('Request error:', error);
    //console.log('body', body)
    //console.log(typeof body);
    if (!error) callback(body);
  });
};

const breedParser = function(sourceText) {
  const data = JSON.parse(sourceText);
  if (data.length < 1) {
    console.log("Data retrieval error: Breed not found");
  } else {
    console.log(data[0]);
  }
};

breedFetcher(breedQuery, breedParser);