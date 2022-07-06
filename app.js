const ageRate = 180000;

class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
    this.age = -1;
  }
  feedPet() {
    console.log("nibble nibble");
  }
  lightSwitch() {
    console.log("time to sleep");
  }
  playWithPet() {
    console.log("Play time!");
  }
  // ageUp = () => {
  //   this.age = this.age + 1;
  //   console.log(`${this.name} just turned ${this.age}`);
  // };
  ageUp = () => {
    if (this.age === 0) {
      console.log(`It hatched!`);
    }
    this.age = this.age + 1;
    console.log(`${this.name} just turned ${this.age}`);
  };
}

//what do I want first? --> Instantiate a new pet

const dino = new Pet("Pol");
console.log(dino);

setInterval(dino.ageUp, ageRate * 1000);

//Now what do we want? --> to age every 3 seconds // for birthday function to be called every 3 seconds and STOP if/when pet dies

//If Im going to pass a class method, that references the class itself, in other words 'this' as a call back function then you must wrap it in an annonymous function otherwise 'this' will reference the object that setInterval is living in.

// clearInterval(timerId);
