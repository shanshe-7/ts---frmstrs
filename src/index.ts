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
    make: 'Honda',
    model: 'Civic',
    year: 2020,
  },
  car2: {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
  },
};

const cars: Array<Car> = [
  {
    make: 'Honda',
    model: 'Civic',
    year: 2020,
  },
];

const books: [string, number, boolean] = ['Harry Potter', 2000, true];

let endTime: Date;
endTime = new Date();
