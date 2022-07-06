class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
    this.age = -1;
  }
  feedPet = () => {
    console.log("nibble nibble");
  };
  lightSwitch = () => {
    console.log("time to sleep");
  };
  playWithPet = () => {
    console.log("Play time!");
  };
  ageUp = () => {
    if (this.age === 0) {
      console.log(`It hatched!`);
    }
    this.age = this.age + 1;
    console.log(`${this.name} just turned ${this.age}`);
  };
}

//first it is born/hatched.
//then it requires to be fed <-- every 4 minutes
//then it requires to play <-- every 4 minutes
//and then it requires to sleep <-- every 4 minutes
//it ages <--- every 5 minutes

//INSTANTIATE pet:

const dino = new Pet("Pol");
console.log(dino);

//====================================

//FEED TIME:

// setInterval(dino.feedPet, 240000);

//====================================

//PLAY TIME:

// setInterval(dino.playWithPet, 240000) //every 4 minutes

//====================================

//SLEEP TIME:

// setInterval(dino.lightSwitch, 240000);

//====================================

//AGING:

// setInterval(dino.ageUp, 240000);

//====================================

//If Im going to pass a class method, that references the class itself, in other words 'this' as a call back function then you must wrap it in an annonymous function otherwise 'this' will reference the object that setInterval is living in.

//=============================
