class Animal {
  constructor(public name: string) {
    this.name = name;
  }

  protected getName(): string {
    return this.name;
  }

  private logName(): void {
    console.log(this.getName());
  }
}

class Cat extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
    this.breed = breed;
  }

  protected getBreed(): string {
    console.log(this.getName());
    return this.breed;
  }
}

class PersianCat extends Cat {
  constructor(name: string, breed: string, public origin: string) {
    super(name, breed);
    this.origin = origin;
  }

  public sleep(): void {
    console.log("Sleeping...");
  }
}

const cat = new Cat("Tom", "Persian");
