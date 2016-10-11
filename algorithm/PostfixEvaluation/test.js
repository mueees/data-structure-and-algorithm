'use strict';

let PostfixEvaluation = require('./index');

let postfixEvaluation = new PostfixEvaluation();

console.log(postfixEvaluation.evaluate('123*+5-'));