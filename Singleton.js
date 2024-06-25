class Singleton {
    constructor() {
        if (Singleton._instance) {
            return Singleton._instance;
        }
        Singleton._instance = this;
    }

    static getInstance() {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true
