'use strict';

/**
 In normal algebra we use the infix notation like a+b*c. The corresponding postfix notation is abc*+. The algorithm for the conversion is as follows :
 Scan the Infix string from left to right.

 Initialise an empty stack.

 If the scannned character is an operand, add it to the Postfix string. If the scanned character is an operator and if the stack is empty Push the character to stack.

 If the scanned character is an Operand and the stack is not empty, compare the precedence of the character with the element on top of the stack (topStack). If topStack has higher precedence over the scanned character Pop the stack else Push the scanned character to stack. Repeat this step as long as stack is not empty and topStack has precedence over the character.

 Repeat this step till all the characters are scanned.
 (After all characters are scanned, we have to add any character that the stack may have to the Postfix string.) If stack is not empty add topStack to Postfix string and Pop the stack. Repeat this step as long as stack is not empty.

 Return the Postfix string.
 * */

let Stack = require('../../structure/stack');

class InfixToPostfix {
    constructor(name) {
        this.precedence = [
            '*',
            '/',
            '-',
            '+'
        ];

        this.name = name;
    }

    isHigherPrecedence(first, second) {

    }

    convert(infix) {
        let postFix = '';
        let stack = new Stack();
        let symbol;

        for (let i = 0; i < infix.length; i++) {
            symbol = infix[i];

            if (this.precedence.indexOf(symbol) === -1) {
                // it's operand
                postFix += symbol;
            } else {
                // it's operator
                if (stack.isEmpty()) {
                    stack.push(symbol);
                } else {
                    let topStack = stack.getTop();

                    if (this.isHigherPrecedence(topStack, symbol)) {

                    }
                }
            }
        }


        return postFix;
    }
}

module.exports = InfixToPostfix;