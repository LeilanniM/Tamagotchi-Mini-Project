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

  //============================

  hatch = () => {
    state.age = this.age; //updating the STATE property: state.age from NULL to 0.

    console.log(`I've hatched!`); //Letting us now it has hatched!

    state.hatched = true; //updating STATE property: state.hatches from FALSE to TRUE

    state.ageCount = setInterval(this.ageUp, 5000); //Updating STATE property and giving it a value of a callback function.
    state.hungerCount = setInterval(this.getsHungry, 2000); // ^^^
  }; //-------------hatch() FUNCTION ENDS
  //============================

  ageUp = () => {
    this.age += 1; //increaing AGE in incremeants of 1 everytime it is called
    state.age = this.age; //updating STATE property: state.age from its current value to the current value of this.age

    console.log(`${this.name} just turned ${this.age}`); //letting us know how old our Pet just turned
  }; //--------ageUp() FUNCTION ENDS
  //============================

  getsHungry = () => {
    this.hunger += 1; //increasing HUNGER in increameants of 1 everytime the function is called
    state.hunger = this.hunger; //updating STATE property: state.hunger from its current value to this.hunger 's current value

    console.log(`HUNGER: ${this.hunger}`); //letting us know the new value of this.hunger

    if (this.hunger === 10) {
      //when this.hunger reaches 10, enter the bracket
      console.log(`Death by hunger ⚰️`); //letting us know our pet died of hunger

      this.isDead = true; //updating this.isDead 's value from FALSE to TRUE

      clearInterval(state.ageCount); //once PET dies , STOPs AGING by clearing the interval that was making it age every 5 secs by calling ageUP()
      clearInterval(state.hungerCount); //when PET DIES, (by reaching hunger: 10)

      console.log(state); //shows as an updated version of out STATE object
    } else if (this.hunger >= 5) {
      //else if IT HASN'T DIED but hunger has reached 5 or higher (but still less than 10), enter the bracket
      console.log(`feed me, feed me, FEED MEEEEE!!!`); //letting us know it needs to be FED
    }

    // console.log(state);
  }; //-------------- getsHungry() FUNCTION ENDS

  //============================
} //end of class

//===========================INSTANTIATE=================================

const startGame = () => {
  //function that gets triggered when button START is pressed.
  const dino = new Pet("Pol"); //instantiating our new Pet
  console.log(`${dino.name} has been instantiated`); //letting us know it has been instantiated
  setTimeout(dino.hatch, 5000); //function dino.hatch() will be called 5 secs after START button is pressed, this will hatch our egg after 5 second of button being pressed
};

//===============================STATE================================

const state = {
  //object where we can keep the STATE OF THE GAME organized
  isDay: true,
  hunger: null,
  sleepiness: null,
  boredom: null,
  age: null,
  hatched: false,
  //------------------ Below: to be able to access these variables from anywhere.
  hungerCount: null, //so that I can access these from any point in my coding.
  ageCount: null, //^^^^^
};
// console.log(state);

//==========================START THE GAME===========================

const startButton = document.querySelector("#start-pause"); //grabbing the button from HTML
startButton.addEventListener("click", startGame); //so that everytime it is clicked, it runs the function startGame()

//===================================================================
