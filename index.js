import Bucket from './bucket.js';

class HashMap{

    constructor() {
        this.capacity = 16;
        this.bucketList = []
        this.loadFactor = 0.75;

        for(let i = 0; i < this.capacity; i++) {
            this.bucketList.push(new Bucket())
        }
    }

    getBucket(index) {
        if(index < 0 || index > this.bucketList.length) {
            throw new Error("Attempted to acces index out of bound!");
        }

        return this.bucketList[index];
    }

    hash(key) {
        let hashCode = 0;
        let primeNumber = 31;

        for(let i = 0; i < key.length; i++) {
            hashCode += primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {
        const bucketIndex = this.hash(key) % this.capacity;
        const currBucket = this.getBucket(bucketIndex);

        if(currBucket.find(key) === null) {
            currBucket.append(key, value);
        } else {
            let currNode = currBucket.findIndex(currBucket.find(key));
            currNode.value = value;
        }
    }

    size() {
        return this.bucketList.length;
    }

    printNodes() {
        for(let i = 0; i < this.capacity; i++) {
            let current = this.bucketList[i];
            while(current !== null) {
                console.log(current);
                current = current.next;
            }
        }
    }

}

const map = new HashMap();
