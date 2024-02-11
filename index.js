import Bucket from './bucket.js';

class HashMap{

    constructor() {
        this.capacity = 16;
        this.bucketList = Array.from({length: this.capacity}, () => new Bucket())
        this.loadFactor = 0.75;

    }

    getBucket(index) {
        if(index < 0 || index >= this.bucketList.length) {
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
        const currBucket = this.bucketList[bucketIndex];
        let head = currBucket.head;

        while(head) {
            if(head.key === key) {
                head.value = value;
                return
            }
            head = head.next;
        } 

        currBucket.append(key,value);
    }

    get(key) {
        const hashCode = this.hash(key) % this.capacity;
        const currBucket = this.getBucket(hashCode);
        let head = currBucket.head;
        
        while(head) {
            if(head.key === key) {
                return head.value;
            }

            head = head.next
        }

        return null
    }

    has(key) {
        const hashCode = this.hash(key) % this.capacity;
        const currBucket = this.getBucket(hashCode);
        let head = currBucket.head;

        while(head) {
            if(head.key === key) {
                return true
            }

            head = head.next
        }

        return false;
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
            let current = this.bucketList[i].head;
            while(current) {
                counter++;
                current = current.next
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
        let string = []

        for(let i = 0; i < this.capacity; i++) {
            let current = this.bucketList[i].head;
            while(current) {
                string.push([current.key, current.value]);
                current = current.next;
            }
        }

        return string;
    }

    keys() {
        const keys = [];

        for(let i = 0; i < this.capacity; i++) {
            let current = this.bucketList[i].head;
            while(current) {
                keys.push(current.key);
                current = current.next;
            }
        }
        
        return keys;
    }

    values() {
        const values = [];

        for(let i = 0; i < this.capacity; i++) {
            let current = this.bucketList[i].head;
            while(current) {
                values.push(current.value);
                current = current.next;
            }
        }
        
        return values;
    }

}

const map = new HashMap();
//console.log(map.length())
//map.clear()
//console.log(map.values());
//console.log(map.get())
//console.log(map.has())
console.log(map.printNodes())
