'use strict';

let InfixToPostfix = require('./algorithm/InfixToPostfix');

let infixToPostfix = new InfixToPostfix();

console.log(infixToPostfix.convert('A+B'));