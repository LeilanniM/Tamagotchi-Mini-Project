//------------------------->TAMAGOTCHI<-----------------------------

//====================================================================

areUOk = () => {
  if (dino.hunger === 10 || dino.boredom === 10) {
    console.log(`if statement is workin`);
    clearInterval(countHunger);
    clearInterval(countBoredom);
  }
};

//-------------
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
    areUOk();
    if (this.age === 0) {
      console.log(`It hatched!`);
    }
    this.age = this.age + 1;
    console.log(`${this.name} just turned ${this.age}`);
  }; //end of function

  //Pet Needs

  feedMe = () => {
    areUOk();

    this.hunger += 1;
    console.log(`HUNGER: ${this.hunger}`);

    if (this.hunger >= 5 && this.hunger < 10) {
      console.log(`Feed Me`);
    }
    if (this.hunger === 10) {
      console.log(`Death by hunger`);
      clearInterval(countHunger);
      clearInterval(countBoredom);
    }
  }; //end of function
  //----------------

  playWithMe = () => {
    areUOk();

    this.boredom += 1;
    console.log(`BOREDOM: ${this.boredom}`);

    if (this.boredom >= 5 && this.boredom < 10) {
      console.log(`Play with me, play with me, PLAY WITH ME!!!!`);
    }
    if (this.boredom === 10) {
      console.log(`Death by boredom!`);
      clearInterval(countBoredom);
    }
  };
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
//----------------
playWithPet = () => {
  if (dino.boredom < 10) {
    dino.boredom = dino.boredom - 2;
    console.log(`giggles`);
    console.log(`BOREDOM: ${dino.boredom}`);
  } else {
    console.log(`it's too late to apologize`);
  }
};
//----------------
lightSwitch = () => {
  console.log("time to sleep");
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

const countHunger = setInterval(dino.feedMe, 2000); //this will ask to feed it every X seconds
//make it stop counting after 10 --> clearSetInterval

//Q: How do I feed it?
//A: By calling the function feedPet() inside the console.

//Q: it is still letting me feed it after it is dead
//A: create 'if statement' so that the function: feedPet() only runs if pet is alive!

//====================================================================

//====================================================================
//-------------------->PLAY WITH ME/PLAY WITH PET<--------------------

//first create the function playWithMe()
//Set Timers that starts increasing Boredom:

const countBoredom = setInterval(dino.playWithMe, 6000);

//Q: avoid death by boredom/Play with it:
//A: playWithPet()

//PROBLEM: After it dies of hunger, boredom keeps counting.
//Q: How do I make it so that once the pet dies, everything else stops.
//Brain Storm: create a function that checks if it is alive!
//A: areYouOk()

//PROBLEM: After creating areUOk(): the pet dies of hunger before boredom, but the console was still printing the last BOREDOM value it had at the moment of dying, so I edited the feedMe() function by adding this ---->
// clearInterval(countHunger);
// clearInterval(countBoredom);
//so that when it hits death by hunger, it clears all intervals and not just the countHunger one :)

//====================================================================

//====================================================================

// feedPet();
// playWithPet();
