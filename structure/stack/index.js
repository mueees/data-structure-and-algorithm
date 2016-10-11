'use strict';

class ListNode {
    constructor(value) {
        this.next = null;
        this.data = value;
    }
}

class Stack {
    push(value) {
        let listNode = new ListNode(value);

        if (!this.top) {
            this.top = listNode;
        } else {
            listNode.next = this.top;
            this.top = listNode;
        }
    }

    pop() {
        if (this.top) {
            let data = this.top.data;

            if (this.top.next) {
                this.top = this.top.next;
            } else {
                this.top = null;
            }

            return data;
        } else {
            throw new Error('Stack is empty');
        }
    }

    getTop() {
        if (this.top) {
            return this.top.data;
        } else {
            throw new Error('Stack is empty');
        }
    }

    isEmpty() {
        return !Boolean(this.top);
    }
}

module.exports = Stack;