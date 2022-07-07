//=========================TAMAGOTCHI============================
// let ageCount;
// let hungerCount;

class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
    this.age = 0;
    this.isDead = false;
  } // End of constructor

  hatch = () => {
    state.age = this.age;
    console.log(`I've hatched!`);
    state.hatched = true;
    state.ageCount = setInterval(this.ageUp, 5000);
    state.hungerCount = setInterval(this.getsHungry, 2000);
  };

  ageUp = () => {
    this.age += 1;
    state.age = this.age;

    console.log(`${this.name} just turned ${this.age}`);
  };

  getsHungry = () => {
    this.hunger += 1;
    state.hunger = this.hunger;

    console.log(`HUNGER: ${this.hunger}`);

    if (this.hunger === 7) {
      console.log("Girl I'm dead and hungry...");
      this.isDead = true;
      clearInterval(state.ageCount);
      clearInterval(state.hungerCount);
      console.log(state);
    } else if (this.hunger >= 5) {
      console.log(`feed me, feed me, FEED MEEEEE!!!`);
    }

    // console.log(state);
  };
  //-------------------
} //end of class

//===========================INSTANTIATE=================================

const startGame = () => {
  const dino = new Pet("Pol");
  console.log(`${dino.name} has been instantiated`);
  setTimeout(dino.hatch, 5000);
};

//===============================STATE================================

const state = {
  isDay: true,
  hunger: null,
  sleepiness: null,
  boredom: null,
  age: null,
  hatched: false,
  //------------------ Below: to be able to access these variables from anywhere.
  hungerCount: null,
  ageCount: null,
};
// console.log(state);

//==========================START THE GAME===========================

const startButton = document.querySelector("#start-pause");
startButton.addEventListener("click", startGame);

//===================================================================
