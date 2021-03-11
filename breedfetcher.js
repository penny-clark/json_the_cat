const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const breedQuery = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(breedQuery, (error, response, body) => {
    const data = JSON.parse(body);
    let description;
    if (data.length < 1) {
      error = "User input error: Breedname not found";
      description = null;
    } else if (!error) {
    error = null; 
    description = data[0]["description"];
    }
    callback(error, description);
  });
};

module.exports = { fetchBreedDescription };