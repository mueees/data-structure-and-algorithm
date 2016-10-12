'use strict';

let QueueCircularArray = require('./index').QueueCircularArray;

let queueCircularArray = new QueueCircularArray(10);

queueCircularArray.enQueue(1);
queueCircularArray.enQueue(2);
queueCircularArray.enQueue(3);
queueCircularArray.enQueue(3);
queueCircularArray.enQueue(3);
console.log(queueCircularArray.size());

while(!queueCircularArray.isEmpty()){
    console.log(queueCircularArray.deQueue());
}