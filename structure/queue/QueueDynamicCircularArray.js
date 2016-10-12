'use strict';

class QueueDynamicCircularArray{
    constructor(capacity){
        if(!capacity){
            throw new Error('Capacity must be defined');
        }

        this.capacity = capacity;
        this.elements = new Array(capacity);
        this.front = this.rear = null;
    }

    isEmpty(){
        return this.front === null;
    }

    isFull(){
        return this.rear + 1 >= this.capacity;
    }

    size(){
        if(this.rear === null){
            return 0;
        }else{
            return this.rear - this.front + 1;
        }
    }

    enQueue(data){
        if(this.isFull()){
            this.resize();
        }

        this.rear += 1;

        this.elements[this.rear] = data;

        if(this.front === null){
            this.front = this.rear;
        }
    }

    deQueue(){
        if(this.isEmpty()){
            throw new Error('Queue is empty');
        }

        let element = this.elements[this.front];

        if(this.front === this.rear){
            this.front = this.rear = null;
        }else{
            this.front += 1;
        }

        return element;
    }

    resize(){

    }
}

module.exports = QueueDynamicCircularArray;