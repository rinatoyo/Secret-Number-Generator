"use strict";
module.exports = function() {
  var secretNumber = Math.floor(Math.random() * 1000 + 1);

  var storedNumber = function() {
    return secretNumber;
  };
  return storedNumber;
};
