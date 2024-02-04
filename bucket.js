import Node from "./node.js"

class Bucket{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    append(data) {
        const newNode = new Node(data);
        
        if(!this.head) {
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
}

export default Bucket;