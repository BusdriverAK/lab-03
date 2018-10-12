'use strict';

const fs = require('fs');
const faker = require('faker');
//const file = process.argv[2];
let content;

fs.readFile('./files/test.txt', 'UTF-8', function read(err, data){
  if(err){
    throw err;
  }
  content = data;
  console.log(content);
  processFile();
});

function processFile() {
  console.log(content);
}

/* fs.appendFile('./files/test.txt',` ${faker.random.word()}`, function(err) {
  if(err){
    throw err;
  }
  console.log(process.argv[2]);
}); */

console.log('after calling readfile');