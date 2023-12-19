//dependency of car that we have extracted
class Engine {
  ignite(): void {
    console.log("vroom vroom");
  }
}

//car has the engine dependency
//but it's not in charge of constructing that dependency
//only of using it
class Car {
  //we still need a variable to store the engine
  engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  //use of engine after getting its dependency
  start(): void {
    this.engine.ignite();
  }
}

//make a new engine
const engine = new Engine();
//INJECT the DEPENDENCY
const car = new Car(engine);

//do your business logic
car.start();
