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

    hash(key) {
        let hashCode = 0;
        let primeNumber = 31;

        for(let i = 0; i < key.length; i++) {
            hashCode += primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % 16;
    }

    set(key, value) {
        const index = this.hash(key);
        const length = this.size();

        

    }

    size() {
        return this.bucketList.length;
    }

}

const map = new HashMap();
map.set('megazoid', 'dumb ass motherfucker');
map.set('skdf', 'sdfsaaff');
map.set('asdf', 'sdfsaaaff');
map.set('dfsdfdf', 'ssssdfsaff');
map.set('sdf', 'sdfsdddaff');
map.set('fd', 'sdfsdfdfdfaff');
map.set('s', 'fdf');
map.set('s', 'dfs');
map.set('as', 'sdfsdf');
map.set('fs12df', 'as55fds');
map.set('fs23df', 'as4fds');
map.set('fsd34f', 'as4433fds');
map.set('fsd32f', 'as3fds');
map.set('fsd11f', 'asf22ds');
map.set('fsd2f', 'asf333ds');
map.set('fsd32f', 'asf222ds');
map.set('fsd321f', 'asfds');
console.log(map.size());
console.log(map);