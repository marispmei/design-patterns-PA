class Handler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return 'No handler found';
    }
}

class ConcreteHandlerA extends Handler {
    handle(request) {
        if (request === 'A') {
            return 'Handled by ConcreteHandlerA';
        }
        return super.handle(request);
    }
}

class ConcreteHandlerB extends Handler {
    handle(request) {
        if (request === 'B') {
            return 'Handled by ConcreteHandlerB';
        }
        return super.handle(request);
    }
}

const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();
handlerA.setNext(handlerB);

console.log(handlerA.handle('B')); // Handled by ConcreteHandlerB
console.log(handlerA.handle('A')); // Handled by ConcreteHandlerA
console.log(handlerA.handle('C')); // No handler found
