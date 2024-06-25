class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    update(data) {
        console.log(`Observer received data: ${data}`);
    }
}

const subject = new Subject();
const observer1 = new Observer();
subject.subscribe(observer1);
subject.notify('Hello Observers');
