'use strict';

/**
 * http://scriptasylum.com/tutorials/infix_postfix/algorithms/infix-postfix
 *
 In normal algebra we use the infix notation like a+b*c. The corresponding postfix notation is abc*+. The algorithm for the conversion is as follows :
 Scan the Infix string from left to right.

 Initialise an empty stack.

 If the scannned character is an operand, add it to the Postfix string.

 If the scanned character is an Operator and if the stack is empty Push the character to stack.

 If the scanned character is an Operator and the stack is not empty, compare the precedence of the character with the element on top of the stack (topStack).
 - If topStack has higher precedence over the scanned character Pop the stack else Push the scanned character to stack.
 - Repeat this step as long as stack is not empty and topStack has precedence over the character.

 Repeat this step till all the characters are scanned.
 (After all characters are scanned, we have to add any character that the stack may have to the Postfix string.)
 If stack is not empty add topStack to Postfix string and Pop the stack. Repeat this step as long as stack is not empty.

 Return the Postfix string.
 * */

let Stack = require('../../structure/stack');

class InfixToPostfix {
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
                precedence: 5
            },
            {
                operator: '/',
                precedence: 5
            },
            {
                operator: '+',
                precedence: 4
            },
            {
                operator: '-',
                precedence: 4
            }
        ];
    }

    isHigherOrEqualOperator(first, second) {
        let firstOperator = this.getOperatorDefinition(first);
        let secondOperator = this.getOperatorDefinition(second);

        if (!firstOperator) {
            throw new Error('Unknown operator: ' + first);
        }

        if (!secondOperator) {
            throw new Error('Unknown operator: ' + second);
        }

        return firstOperator.precedence >= secondOperator.precedence;
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

    convert(infix) {
        let postFix = '',
            stack = new Stack(),
            symbol;

        for (let i = 0; i < infix.length; i++) {
            symbol = infix[i];

            if (!this.isOperator(symbol)) {
                // it's operand
                postFix += symbol;
            } else {
                switch (symbol) {
                    case '(':
                        stack.push(symbol);

                        break;

                    case ')':
                        while (stack.getTop() !== '(') {
                            postFix += stack.pop();
                        }

                        // remove last '(' symbol
                        stack.pop();

                        break;

                    default:
                        if (stack.isEmpty()) {
                            stack.push(symbol);
                        } else {
                            let topStack = stack.getTop();

                            if (topStack == '(') {
                                stack.push(symbol);
                            } else {
                                while (!stack.isEmpty() && this.isHigherOrEqualOperator(stack.getTop(), symbol)) {
                                    postFix += stack.pop();
                                }

                                stack.push(symbol);
                            }
                        }

                        break;
                }
            }
        }

        while (!stack.isEmpty()) {
            postFix += stack.pop();
        }

        return postFix;
    }
}

module.exports = InfixToPostfix;