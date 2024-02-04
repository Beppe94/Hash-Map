class HashMap{

    constructor() {
        this.size = 16;
        this.array = Array.from(this.size)
        this.loadFactor = 0.75;
    }

    hash(key) {
        let hashCode = 0;
        let primeNumber = 31;

        for(let i = 0; i < key.length; i++) {
            hashCode += primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % 16;
    }
}

const map = new HashMap();
console.log(map.hash('omegaluld'))
map.set('lols', 'dumb ass motherfucker');
map.set('skdf', 'sdfsaff');
console.log(map);