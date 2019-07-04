'use strict';
module.exports = function() {

  var secretNumberGenerator = function() {
    return Math.floor((Math.random()*1000)+1)
    } 
    // console.log(secretNumberGenerator());
    var secretNumber = secretNumberGenerator();
    var storedNumber = function() {
        return secretNumber;
    }
    return storedNumber;
};
