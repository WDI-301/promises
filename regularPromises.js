
const axios = require('axios');

const API_URL = `https://api.coindesk.com/v1/bpi/currentprice.json`;

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Ready to see the price of bitcoin? `, answer => {

  const lowerCaseAnswer = answer.toLowerCase();
  if(lowerCaseAnswer === "yes" || lowerCaseAnswer === "y"){
    
    // Insert code to fetch the bitcoin price and display after it ha been fetched.
    // Use the .then() and .catch() methods on the promises.
    
    console.log('The price of bitcoin is: ', `$${bitcoinRate}`);
  } else {
    console.log("Okay, thank you for using this app");
  }

  readline.close();
})


