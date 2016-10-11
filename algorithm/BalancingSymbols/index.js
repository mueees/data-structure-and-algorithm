'use strict';

let Stack = require('../../structure/stack');

class BalancingSymbols {
    static isBalanced(symbols) {
        let stack = new Stack();
        let isBalanced = true;

        for (let i = 0; i < symbols.length; i++) {
            if (symbols[i] === '(') {
                stack.push(symbols[i]);
            } else if (symbols[i] === ')') {
                if (stack.isEmpty()) {
                    isBalanced = false;
                    break;
                }

                let lastSymbolFromStack = stack.pop();

                if (lastSymbolFromStack != '(') {
                    isBalanced = false;
                    break;
                }
            }
        }

        if (isBalanced && !stack.isEmpty()) {
            isBalanced = false;
        }

        return isBalanced;
    }
}

module.exports = BalancingSymbols;