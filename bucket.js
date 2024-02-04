import Node from "./node.js"

class Bucket{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    firstElement() {
        return this.head;
    }

    lastElement() {
        return this.tail;
    }

    append(key, value) {
        const newNode = new Node(key, value);
        
        if(this.firstElement() === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    size() {
        let current = this.head;
        let counter = 0;

        while(current != null) {
            current = current.next;
            counter++;
        }

        return counter;
    }

    findIndex(index) {
        if(index > this.size()) return null;
        if(index === 0) {
            return this.head
        } else {
            let currNode = this.head;
            for (let i = 0; i < index; i++) {
                if(currNode !== null) {
                    currNode = currNode.next;
                }
            }
            return currNode
        }
    }

    find(value) {
        if(this.size() > 0) {
            let currNode = this.head;
            let index = 0;

            while(currNode !== null) {
                if(currNode.key === value) {
                    return index;
                }
                index++;
                currNode = currNode.next;
            }
        }

        return null;
    }
}

export default Bucket;