//=========================TAMAGOTCHI============================
// let ageCount;
// let hungerCount;
// let boredomCount;
// let sleepinessCount;

class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
    this.age = 0;
    this.isDead = false;
  } // End of constructor

  //============================

  hatch = () => {
    state.age = this.age;

    console.log(`I've hatched!`);
    state.hatched = true;
    state.ageCount = setInterval(this.ageUp, 5000);
    state.hungerCount = setInterval(this.getsHungry, 10000);

    // state.boredomCount = setInterval(this.getsBored, 30000);
    // state.sleepinessCount = setInterval(this.getsSleepy, 2000);
  }; //-------------hatch() FUNCTION ENDS
  //============================

  ageUp = () => {
    this.age += 1;
    state.age = this.age;

    console.log(`${this.name} just turned ${this.age}`);
  }; //--------ageUp() FUNCTION ENDS
  //============================

  getsHungry = () => {
    this.hunger += 1;
    state.hunger = this.hunger;

    console.log(`HUNGER: ${this.hunger}`);

    if (this.hunger === 10) {
      console.log(`Death by hunger ⚰️`);

      this.isDead = true;

      clearInterval(state.ageCount);
      clearInterval(state.hungerCount);
      //   clearInterval(state.boredomCount);
      //   clearInterval(state.sleepinessCount);

      console.log(state);
    } else if (this.hunger >= 5) {
      console.log(`feed me, feed me, FEED MEEEEE!!!`);
    }
  }; //-------------- getsHungry() FUNCTION ENDS

  //============================

  //   getsBored = () => {
  //     this.boredom += 1;
  //     state.boredom = this.boredom;

  //     console.log(`BOREDOM: ${this.boredom}`);

  //     if (this.boredom === 10) {
  //       console.log(`Death by boredom ⚰️`);

  //       this.isDead = true;

  //       clearInterval(state.ageCount);
  //       clearInterval(state.hungerCount);
  //       clearInterval(state.boredomCount);
  //       clearInterval(state.sleepinessCount);

  //       console.log(state);
  //     } else if (this.boredom >= 5) {
  //       console.log(`play with me, PLAY WITH ME, PLAAAY WIIITH MEEE AAAAH!!!`);
  //     }
  //   }; //------------getsBored() FUNCTION ENDS
  //============================

  //   getsSleepy = () => {
  //     this.sleepiness += 1;
  //     state.sleepiness = this.sleepiness;

  //     console.log(`SLEEPINESS: ${this.sleepiness}`);

  //     if (this.sleepiness === 10) {
  //       console.log(`Death by sleepiness ⚰️`);

  //       this.isDead = true;

  //       clearInterval(state.ageCount);
  //       clearInterval(state.hungerCount);
  //       clearInterval(state.boredomCount);
  //       clearInterval(state.sleepinessCount);

  //       console.log(state);
  //     } else if (this.sleepiness >= 5) {
  //       console.log(`YAAAAWN! zzzzzZZZZ`);
  //     }
  //   }; //---------getsSleepy() FUNCTIONS ENDS
  //============================
} //end of class

//===========================INSTANTIATE=================================
let dino;

const startGame = () => {
  dino = new Pet("Pol");
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
  boredomCount: null,
  sleepinessCount: null,
};
// console.log(state);

//==========================START THE GAME===========================

const startButton = document.querySelector("#start-pause"); //grabbing the button from HTML
startButton.addEventListener("click", startGame); //so that everytime it is clicked, it runs the function startGame()

//========================PET OWNER'S DUTIES==========================

const feedPet = () => {
  dino.hunger -= 2;

  console.log(`CRONCH CRONCH YUM!`);
  console.log(`HUNGER: ${dino.hunger}`);
};

// function playWithPet() {
//   dino.boredom -= 2;
//   state.boredom = dino.boredom;

//   console.log(`[Giggles]`);
//   console.log(state);
// }

// function lightSwitch() {
//   dino.sleepiness -= 5;
//   state.sleepiness = dino.sleepiness;

//   console.log(`[passes out]`);
//   console.log(state);
// }
