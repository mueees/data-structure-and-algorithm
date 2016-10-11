'use strict';

let Stack = require('../../structure/stack');

class PostfixEvaluation {
    constructor() {
        this.precedence = [
            {
                operator: '(',
                precedence: 6
            },
            {
                operator: ')',
                precedence: 6
            },
            {
                operator: '*',
                precedence: 5,
                evaluate: function (a, b) {
                    return a * b;
                }
            },
            {
                operator: '/',
                precedence: 5,
                evaluate: function (a, b) {
                    return a / b;
                }
            },
            {
                operator: '+',
                precedence: 4,
                evaluate: function (a, b) {
                    return a + b;
                }
            },
            {
                operator: '-',
                precedence: 4,
                evaluate: function (a, b) {
                    return a - b;
                }
            }
        ];
    }

    isOperator(symbol) {
        return Boolean(this.getOperatorDefinition(symbol));
    }

    getOperatorDefinition(symbol) {
        let operator;

        this.precedence.forEach(function (operatorDefinition) {
            if (operatorDefinition.operator === symbol) {
                operator = operatorDefinition;

                return false;
            }
        });

        return operator;
    }

    evaluateOperator(firstOperand, secondOperand, operator) {
        let operatorDefinition = this.getOperatorDefinition(operator);

        if (!operatorDefinition) {
            throw new Error('Cannot find operator :' + operator);
        }

        return operatorDefinition.evaluate(firstOperand, secondOperand);
    }

    evaluate(postfix) {
        let stack = new Stack(),
            symbol;

        for (let i = 0; i < postfix.length; i++) {
            symbol = postfix[i];

            if (!this.isOperator(symbol)) {
                stack.push(symbol);
            } else {
                let secondOperand = stack.pop();
                let firstOperand = stack.pop();

                stack.push(this.evaluateOperator(Number(firstOperand), Number(secondOperand), symbol));
            }
        }

        return stack.getTop();
    }
}

module.exports = PostfixEvaluation;