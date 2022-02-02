function add(a: number, b: number) {
  return a + b;
}

add(add(1, 2), 17);

type Car = {
  make: string;
  model: string;
  year: number;
  changeVoltage?: number;
};

interface anCar {
  [key: string]: Car;
}

let car: anCar = {
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

const cars: Array<Car> = [
  {
    make: "Honda",
    model: "Civic",
    year: 2020,
  },
];

const books: [string, number, boolean] = ["Harry Potter", 2000, true];

let endTime: Date;
endTime = new Date();

// Union types

type FlipCoin = {
  coin: "heads" | "tails";
};

function flipCoin(): FlipCoin["coin"] {
  return Math.random() < 0.5 ? "heads" : "tails";
}

// Intersection

type User = {
  name: string;
  age: number | string;
};

type RecursiveUser = User | RecursiveUser[];

const recUser: RecursiveUser = [{ name: "name", age: 12 }];

type SpecialUser = User & { surname: string };

function getUser(): SpecialUser {
  return { age: 19, name: "Jon", surname: "Doe" };
}

// Interfaces

interface Movies {
  title: string | undefined;
}

interface Sport {
  play(age: number): void;
}

class Football implements Sport {
  play(age: number) {
    console.log(`Playing football for ${age} years`);
  }
}

interface AnimalLike {
  bark(): void;
}

function makeAnimal(animal: AnimalLike): AnimalLike {
  console.log(animal.sleep());
  console.log(animal.bark());

  return animal;
}

interface AnimalLike {
  sleep(): void;
}
