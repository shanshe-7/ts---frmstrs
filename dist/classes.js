class Animal {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    logName() {
        console.log(this.getName());
    }
}
class Cat extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
        this.breed = breed;
    }
    getBreed() {
        console.log(this.getName());
        return this.breed;
    }
}
class PersianCat extends Cat {
    constructor(name, breed, origin) {
        super(name, breed);
        this.origin = origin;
        this.origin = origin;
    }
    sleep() {
        console.log("Sleeping...");
    }
}
const cat = new Cat("Tom", "Persian");
