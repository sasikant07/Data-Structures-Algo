// Implement LRU(Least Recently Used) Cache
// Roadside coder

class LRU {
    constructor(max = 5) {
        this.max = max;
        this.cache = new Map();
    }

    get (key) {
        let item = this.cache.get(key);

        if (item) {
            this.cache.delete(key);
            this.cache.set(key, item);
        }

        return item;
    }

    set (key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size === this.max) {
            this.cache.delete(this.first());
        }

        this.cache.set(key, value);
    }

    first() {
        return this.cache.keys().next().value;
    }
}

const lruCache = new LRU(3);

lruCache.set("name", "piyush");
lruCache.set("age", "24");
lruCache.set("profession", "SDE");
console.log(lruCache.cache);
lruCache.get("name");
console.log(lruCache.cache);
lruCache.set("location", "gurugram");
console.log(lruCache.cache);
