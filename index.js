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
            hashCode += primeNumber * hashCode + key.charCodeAt(i) % this.capacity;
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

    get(key) {
        const hashCode = this.hash(key) % this.capacity;
        const currBucket = this.getBucket(hashCode);

        if(currBucket.head) {
            return currBucket.head.value;
        }

        return null;
    }

    has(key) {
        const hashCode = this.hash(key) % this.capacity;
        const currBucket = this.getBucket(hashCode);

        if(currBucket.find(key) === 0) {
            return true;
        } else {
            return false;
        }
    }

    remove(key) {
        const hashCode = this.hash(key) % this.capacity;
        const currBucket = this.getBucket(hashCode);

        if(currBucket) {
            const index = currBucket.find(key);
            if(index !== null) {
                currBucket.remove(index);
                return true;
            }
            return false;
        }
        return false;
    }

    length() {
        let counter = 0;

        for(let i = 0; i < this.bucketList.length; i++) {
            if(this.bucketList[i].head != null) {
                counter++
            }
        }

        return counter
    }

    clear() {
        for (let i = 0; i < this.bucketList.length; i++) {
            let current = this.bucketList[i].head;
            while(current) {
                let next = current.next;
                current.next = null;
                current = next;
            }

            this.bucketList[i].head = null;
            this.bucketList[i].tail = null;
        }
    }

    size() {
        return this.bucketList.length;
    }

    printNodes() {
        for(let i = 0; i < this.capacity; i++) {
            let current = this.bucketList[i];
            while(current != null) {
                console.log(current);
                current = current.next;
            }
        }
    }

}

const map = new HashMap();
map.set("running", "superpotato");
map.set("overpower", "pergolato");
map.set("mountain", "turbolenza");
//console.log(map.get("running"));
//console.log(map.has("mountain"))
//console.log(map.remove("potat"));
//console.log(map.length())
map.printNodes()
map.clear()
console.log("---------");
map.printNodes()