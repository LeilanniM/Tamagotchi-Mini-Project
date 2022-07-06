//------------------------->TAMAGOTCHI<-----------------------------

//====================================================================
//PET:
class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
    this.age = -1;
  }
  ageUp = () => {
    if (this.age === 0) {
      console.log(`It hatched!`);
    }
    this.age = this.age + 1;
    console.log(`${this.name} just turned ${this.age}`);
  }; //end of function

  //Pet Needs

  feedMe = () => {
    this.hunger += 1;
    console.log(`HUNGER: ${this.hunger}`);

    if (this.hunger >= 5 && this.hunger < 10) {
      console.log(`Feed Me`);
    }
    if (this.hunger === 10) {
      console.log(`Im dead girl`);
      clearInterval(countHunger);
    }
  }; //end of function
} //end of class

//====================================================================

//====================================================================
//OWNER:

//Pet Owner duties:

feedPet = () => {
  if (dino.hunger < 10) {
    dino.hunger = dino.hunger - 2;
    console.log(`nibble nibble`);
    console.log(`HUNGER: ${dino.hunger}`);
    console.log(`burp`);
  } else {
    console.log(`it's too late to apologize`);
  }
};
lightSwitch = () => {
  console.log("time to sleep");
};
playWithPet = () => {
  console.log("Play time!");
};

//INSTANTIATE pet:

const dino = new Pet("Pol");
console.log(dino);
//====================================================================

//===================================================================
//HOW TO CALL A CLASS FUNCTION INSIDE A CALLBACK FUNCTION:
//If Im going to pass a class method, that references the class itself, in other words 'this' as a call back function then you must wrap it in an annonymous function otherwise 'this' will reference the object that setInterval is living in.
//====================================================================

//====================================================================

//LIFE CYCLE
//first it is born/hatched.
//then it get hungry <-- every 4 minutes
//then it requires to play <-- every 4 minutes
//and then it requires to sleep <-- every 4 minutes
//it ages <--- every 5 minutes
//====================================================================

//====================================================================
//------------------------>FEED ME/FEED IT<---------------------------

//We can Set a timer that starts INCREASING THE HUNGER line

const countHunger = setInterval(dino.feedMe, 3000); //this will ask to feed it every X seconds
//make it stop counting after 10 --> clearSetInterval

//Q: How do I feed it?
//A: By calling the function feedPet() inside the console.

//Q: it is still letting me feed it after it is dead
//A: create 'if statement' so that the function: feedPet() only runs if pet is alive!

//====================================================================

//====================================================================
