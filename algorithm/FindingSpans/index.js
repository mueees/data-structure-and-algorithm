'use strict';


/**
 * The Stock span problem
 * http://www.geeksforgeeks.org/the-stock-span-problem
 * */

let Stack = require('../../structure/stack');

class FindingSpans {
    find(prices) {
        let stack = new Stack();
        let spans = [],
            dayWithHighestPrice;

        for(let i = 0; i < prices.length; i++){
            while(!stack.isEmpty() && prices[stack.getTop()] < prices[i]){
                stack.pop();
            }

            if(stack.isEmpty()){
                dayWithHighestPrice = -1;

                stack.push(i);
            }else{
                dayWithHighestPrice = stack.getTop();
            }

            spans[i] = i - dayWithHighestPrice;
        }

        return spans;
    }
}

module.exports = FindingSpans;