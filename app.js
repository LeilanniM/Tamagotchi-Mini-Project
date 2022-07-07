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

    console.log(`${this.name} has hatched!`);
    state.hatched = true;
    state.ageCount = setInterval(this.ageUp, 5000);
    state.hungerCount = setInterval(this.getsHungry, 4000);

    state.boredomCount = setInterval(this.getsBored, 3000);
    state.sleepinessCount = setInterval(this.getsSleepy, 2000);
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
      clearInterval(state.boredomCount);
      clearInterval(state.sleepinessCount);

      console.log(state);
    } else if (this.hunger >= 5) {
      console.log(`feed me, feed me, FEED MEEEEE!!!`);
    }
  }; //-------------- getsHungry() FUNCTION ENDS

  //============================

  getsBored = () => {
    this.boredom += 1;
    state.boredom = this.boredom;

    console.log(`BOREDOM: ${this.boredom}`);

    if (this.boredom === 10) {
      console.log(`Death by boredom ⚰️`);

      this.isDead = true;

      clearInterval(state.ageCount);
      clearInterval(state.hungerCount);
      clearInterval(state.boredomCount);
      clearInterval(state.sleepinessCount);

      console.log(state);
    } else if (this.boredom >= 5) {
      console.log(`play with me, PLAY WITH ME, PLAAAY WIIITH MEEE AAAAH!!!`);
    }
  }; //------------getsBored() FUNCTION ENDS
  //============================

  getsSleepy = () => {
    this.sleepiness += 1;
    state.sleepiness = this.sleepiness;

    console.log(`SLEEPINESS: ${this.sleepiness}`);

    if (this.sleepiness === 10) {
      console.log(`Death by sleepiness ⚰️`);

      this.isDead = true;

      clearInterval(state.ageCount);
      clearInterval(state.hungerCount);
      clearInterval(state.boredomCount);
      clearInterval(state.sleepinessCount);

      console.log(state);
    } else if (this.sleepiness >= 5) {
      console.log(`YAAAAWN! zzzzzZZZZ`);
    }
  }; //---------getsSleepy() FUNCTIONS ENDS
  //============================
} //end of class

//===========================INSTANTIATE=================================
let dino;
let petName;
const petNameStat = document.querySelector("#petName");

const startGame = () => {
  petName = prompt("Give yoru pet a proper name", "type name");

  dino = new Pet(petName);

  petNameStat.innerHTML = dino.name;

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
  name: null,
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

//====================================================================
//========================PET OWNER'S DUTIES==========================
//====================================================================

//==================FEED BUTTON==============================

function feedPet() {
  if (dino.hunger < 10 && dino.hunger >= 2) {
    dino.hunger -= 2;

    console.log(`CRONCH CRONCH YUM!`);
    console.log(`HUNGER: ${dino.hunger}`);
  } else if (dino.hunger === 1) {
    dino.hunger -= 1;

    console.log(`CRONCH CRONCH YUM!`);
    console.log(`HUNGER: ${dino.hunger}`);
  }
}

const feedButton = document.querySelector("#feed");
feedButton.addEventListener("click", feedPet);

//====================PLAY WITH PET BUTTON=================

function playWithPet() {
  if (dino.boredom < 10 && dino.boredom >= 2) {
    dino.boredom -= 2;
    state.boredom = dino.boredom;

    console.log(`[Giggles]`);
    console.log(`BOREDOM: ${dino.boredom}`);
  } else if (dino.boredom === 1) {
    dino.hunger -= 1;

    console.log(`[Giggles]`);
    console.log(`BOREDOM: ${dino.boredom}`);
  }
}

const playWithPetButton = document.querySelector("#playWithPet");
playWithPetButton.addEventListener("click", playWithPet);

//======================LIGHT SWITCH BUTTON=====================

function lightSwitch() {
  if (dino.sleepiness < 10 && dino.sleepiness >= 2) {
    dino.sleepiness -= 2;
    state.sleepiness = dino.sleepiness;

    console.log(`[passes out]`);
    console.log(`SLEEPINESS: ${dino.sleepiness}`);
  } else if (dino.sleepiness === 1) {
    dino.sleepiness -= 1;

    console.log(`[passes out]`);
    console.log(`SLEEPINESS: ${dino.sleepiness}`);
  }
}

const lightSwitchButton = document.querySelector("#lightSwitch");
lightSwitchButton.addEventListener("click", lightSwitch);

//===========================RESTART BUTTON=================================

function reloadPage() {
  window.location.reload();
}

const restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", reloadPage);

//================================GAME STATS ON SCREEN====================================

//========================================================================================

//NEXT STEPS:
//1.-make stats appear on the screen
//2.-make light switch functional
