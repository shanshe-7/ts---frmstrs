function add(a, b) {
    return a + b;
}
add(add(1, 2), 17);
let car = {
    car1: {
        make: "Honda",
        model: "Civic",
        year: 2020,
    },
    car2: {
        make: "Toyota",
        model: "Corolla",
        year: 2020,
    },
};
const cars = [
    {
        make: "Honda",
        model: "Civic",
        year: 2020,
    },
];
const books = ["Harry Potter", 2000, true];
let endTime;
endTime = new Date();
function flipCoin() {
    return Math.random() < 0.5 ? "heads" : "tails";
}
const recUser = [{ name: "name", age: 12 }];
function getUser() {
    return { age: 19, name: "Jon", surname: "Doe" };
}
class Football {
    play(age) {
        console.log(`Playing football for ${age} years`);
    }
}
function makeAnimal(animal) {
    console.log(animal.sleep());
    console.log(animal.bark());
    return animal;
}
