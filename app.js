class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
    this.age = 0;
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
  ageUp() {
    this.age += 1;
    console.log(`${this.age}`);
  }
}

//what do I want first? --> Instantiate a new pet

const dino = new Pet("Pol");
console.log(dino);

//Now what do we want? --> to age every 1 minute// for birthday function to be called every minute and STOP if/when pet dies

const callAgeUp = setInterval(dino.ageUp, 3000);
