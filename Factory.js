class Car {
    constructor(model) {
        this.model = model;
    }
}

class CarFactory {
    createCar(model) {
        return new Car(model);
    }
}

const factory = new CarFactory();
const car1 = factory.createCar('Tesla Model 3');
const car2 = factory.createCar('BMW 3 Series');
