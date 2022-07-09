//=========================TAMAGOTCHI============================
// let ageCount;
// let hungerCount;
// let boredomCount;
// let sleepinessCount;

//--------STATS
const hungerStat = document.querySelector("#hungerStat");
const boredomStat = document.querySelector("#boredomStat");
const sleepinessStat = document.querySelector("#sleepinessStat");
//---------DINO SAYS

const itHatched = document.querySelector("#itHatched");
const isDead = document.querySelector("#isDead");
const dinoSays = document.querySelector("#dinoSays");

//------------------PET DIV
const pet = document.querySelector("#pet"); //grabbing the acutal PET(div)
//----------------OVERLAY

const overlay = document.querySelector("#overlay"); //grabbing overlay Div to use it in lightSwitch() function

//------------------BUTTONS--------------------------------------------------------------
const lightSwitchButton = document.querySelector("#lightSwitch");
lightSwitchButton.addEventListener("click", lightSwitch); //calling the function when clicked
//-----------------
const feedButton = document.querySelector("#feed");
feedButton.addEventListener("click", feedPet); //calling the function when clicked
//----------------
const playWithPetButton = document.querySelector("#playWithPet");
playWithPetButton.addEventListener("click", playWithPet); //calling the function when clicked

//---------FUNCTION FOR DISABLING BUTTONS WHILE EGG EATS, SLEEPS AND PLAYS:

const disableButtons = () => {
  lightSwitchButton.setAttribute("disabled", true);
  feedButton.setAttribute("disabled", true);
  playWithPetButton.setAttribute("disabled", true);
};

const enableButtons = () => {
  lightSwitchButton.removeAttribute("disabled");
  feedButton.removeAttribute("disabled");
  playWithPetButton.removeAttribute("disabled");
};

//=====================================CLASS==============================

class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
    this.age = 0;
    this.isDead = false;
  } // End of constructor

  //===================

  //DEBUGGING:
  //when PET dies it is left with the class .testegg still on it
  //When we revivie it, it has both classes on .testegg and .egg

  hatch = () => {
    state.age = this.age; //state.age goes from NULL to 0

    itHatched.innerHTML = "🐣 I've Hatched!!";
    console.log(`${this.name} has hatched!`);

    pet.classList.toggle("egg"); //we bring the hatching egg GIF
    setTimeout(() => {
      //4 second later
      pet.classList.toggle("egg"); //turn hatching egg GIF off
      pet.classList.toggle("testegg"); //turn testegg egg GIF on
    }, 4000);

    setTimeout(() => (itHatched.innerHTML = ""), 5000); //so "your egg hatched" message goes away when PET turns 1

    state.hatched = true;
    state.ageCount = setInterval(this.ageUp, 40000); //starts aging after 4 seconds of being hatched

    state.hungerCount = setInterval(this.getsHungry, 10000); //hunger starts increasing
    state.boredomCount = setInterval(this.getsBored, 20000); //boredom starts increasing
    state.sleepinessCount = setInterval(this.getsSleepy, 35000); //sleepiness starts increasing
  }; //-------------hatch() FUNCTION ENDS
  //============================

  ageUp = () => {
    this.age += 1;
    state.age = this.age;

    dinoSays.innerHTML = `🎂  I just turned ${this.age} !! `;
    console.log(`${this.name} just turned ${this.age}`);
  }; //--------ageUp() FUNCTION ENDS
  //============================

  getsHungry = () => {
    this.hunger += 1;
    state.hunger = this.hunger;

    hungerStat.innerHTML = state.hunger; //updating hunger stats
    console.log(`HUNGER: ${this.hunger}`);

    if (this.hunger === 10) {
      isDead.innerHTML = "I died of hunger 💀";
      console.log(`Death by hunger 💀`);
      dinoSays.innerHTML = ""; //so PET chat clears once is it dies, and all it does after is let us know it is dead.

      this.isDead = true;

      pet.classList.toggle("testegg"); //clear images when dead
      pet.classList.toggle("eggdied"); //switches to egg dying GIF

      clearInterval(state.ageCount);
      clearInterval(state.hungerCount);
      clearInterval(state.boredomCount);
      clearInterval(state.sleepinessCount);

      startButton.innerHTML = `TRY AGAIN`;

      console.log(state);
    } else if (this.hunger >= 5) {
      dinoSays.innerHTML = "FEED ME, FEEED MEEEE!!!!";
      console.log(`feed me, feed me, FEED MEEEEE!!!`);
    }
    if (this.hunger === 5 || this.boredom === 5 || this.sleepiness === 5) {
      pet.classList.remove("testegg"); //when the level of hunger is 5 or more, TURN OFF rolling
      pet.classList.add("chilling"); //and TURN ON chilling
    }
  }; //-------------- getsHungry() FUNCTION ENDS

  //============================

  getsBored = () => {
    this.boredom += 1;
    state.boredom = this.boredom;

    boredomStat.innerHTML = state.boredom; //updating boredom stats
    console.log(`BOREDOM: ${this.boredom}`);

    if (this.boredom === 10) {
      isDead.innerHTML = "I died of boredom 💀";
      console.log(`Death by boredom 💀`);
      dinoSays.innerHTML = ""; //so PET chat clears once is it dies, and all it does after is let us know it is dead.

      this.isDead = true;

      pet.classList.toggle("testegg"); //clear images when dead
      pet.classList.toggle("eggdied"); //switches to egg dying GIF

      clearInterval(state.ageCount);
      clearInterval(state.hungerCount);
      clearInterval(state.boredomCount);
      clearInterval(state.sleepinessCount);

      startButton.innerHTML = `TRY AGAIN`;

      console.log(state);
    } else if (this.boredom >= 5) {
      pet.classList.remove("testegg"); //when the level of boredom is 5 or more, TURN OFF rolling
      pet.classList.add("chilling"); //and TURN ON chilling

      dinoSays.innerHTML = "PLAY WITH ME, PLAAAY WIIITH MEEE AAAAH!!!";
      console.log(`play with me, PLAY WITH ME, PLAAAY WIIITH MEEE AAAAH!!!`);
    }
    if (this.hunger === 5 || this.boredom === 5 || this.sleepiness === 5) {
      pet.classList.remove("testegg"); //when the level of hunger is 5 or more, TURN OFF rolling
      pet.classList.add("chilling"); //and TURN ON chilling
    }
  }; //------------getsBored() FUNCTION ENDS
  //============================

  getsSleepy = () => {
    this.sleepiness += 1;
    state.sleepiness = this.sleepiness;

    sleepinessStat.innerHTML = state.sleepiness; //updating sleepiness stats
    console.log(`SLEEPINESS: ${this.sleepiness}`);

    if (this.sleepiness === 10) {
      isDead.innerHTML = "I died of sleepiness 💀";
      console.log(`Death by sleepiness 💀`);
      dinoSays.innerHTML = ""; //so PET chat clears once is it dies, and all it does after is let us know it is dead.

      this.isDead = true;

      pet.classList.toggle("testegg"); //clear images when dead
      pet.classList.toggle("eggdied"); //switches to egg dying GIF

      clearInterval(state.ageCount);
      clearInterval(state.hungerCount);
      clearInterval(state.boredomCount);
      clearInterval(state.sleepinessCount);

      startButton.innerHTML = `TRY AGAIN`;

      console.log(state);
    } else if (this.sleepiness >= 5) {
      pet.classList.remove("testegg"); //when the level of sleepiness is 5 or more, TURN OFF rolling
      pet.classList.add("chilling"); //and TURN ON chilling

      dinoSays.innerHTML = "YAAAAAAAAWWWWWWNNNN!!! 🥱";
      console.log(`YAAAAWN! YAAAAAAAAWWWWWWNNNN 🥱`);
    }
    if (this.hunger === 5 || this.boredom === 5 || this.sleepiness === 5) {
      pet.classList.remove("testegg"); //when the level of hunger is 5 or more, TURN OFF rolling
      pet.classList.add("chilling"); //and TURN ON chilling
    }
  }; //---------getsSleepy() FUNCTIONS ENDS
} //=====================END OF CLASS=================================

//===========================INSTANTIATE=================================
let dino;
let petName;
const petNameStat = document.querySelector("#petName");

//----------------------

const startGame = () => {
  if (dino) {
    dino.age = 0;
    dino.hunger = 0;
    (dino.boredom = 0), (dino.sleepiness = 0);
    dino.isDead = false;

    state.age = null;
    state.hunger = 1;
    state.boredom = 1;
    state.sleepiness = 1;
    state.isDay = true;
    state.hatched = false;
    state.hungerCount = null;
    state.ageCount = null;
    state.boredomCount = null;
    state.sleepinessCount = null;

    hungerStat.innerHTML = state.hunger; //showing initial value on hunger stats
    boredomStat.innerHTML = state.boredom; //showing initial value on boredom stats
    sleepinessStat.innerHTML = state.sleepiness; //showing initial value on sleepiness stats
    dinoSays.innerHTML = "";
    itHatched.innerHTML = "";
    isDead.innerHTML = "";

    dino.hatch();
  } else {
    petName = prompt("Give your pet a proper name", "type name");

    dino = new Pet(petName.toUpperCase());

    petNameStat.innerHTML = dino.name;

    hungerStat.innerHTML = state.hunger; //showing initial value on hunger stats
    boredomStat.innerHTML = state.boredom; //showing initial value on boredom stats
    sleepinessStat.innerHTML = state.sleepiness; //showing initial value on sleepiness stats

    console.log(`${dino.name} has been instantiated`);
    dino.hatch();
  }
};

//===============================STATE================================

const state = {
  isDay: true,
  hunger: 1,
  sleepiness: 1,
  boredom: 1,
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
  if (dino.isDead === false) {
    disableButtons();
    if (dino.hunger < 10 && dino.hunger >= 5) {
      dino.hunger -= 2;

      state.hunger = dino.hunger;
      hungerStat.innerHTML = state.hunger;

      pet.classList.remove("chilling"); //removing chilling temporary while it eats
      pet.classList.add("eggeating"); //starts eating (ON)

      setTimeout(() => {
        pet.classList.toggle("eggeating"); //turn EATING OFF after 4 secs
        if (dino.hunger >= 5 || dino.boredom >= 5 || dino.sleepiness >= 5) {
          enableButtons();
          pet.classList.toggle("chilling"); //if after eating its hunger levels are still 5 or higher, it will remain chilling
        } else {
          enableButtons();
          pet.classList.toggle("testegg"); //after its done eating, if its hunger levels are below 5 it will go back to rolling (testegg)
        }
      }, 4000);

      console.log(`CRONCH CRONCH YUM`);
      console.log(`HUNGER: ${dino.hunger}`);
    } else if (dino.hunger < 5 && dino.hunger >= 2) {
      dino.hunger -= 2;

      state.hunger = dino.hunger;
      hungerStat.innerHTML = state.hunger;

      pet.classList.toggle("testegg"); //turn testegg OFF
      pet.classList.toggle("eggeating"); //TURN EATING ON

      setTimeout(() => {
        enableButtons();
        pet.classList.toggle("eggeating"); //turn EATING OFF
        pet.classList.toggle("testegg"); //turn testegg BACK ON
      }, 4000);

      console.log(`CRONCH CRONCH YUM!`);
      console.log(`HUNGER: ${dino.hunger}`);
    } else if (dino.hunger === 1) {
      dino.hunger -= 1;

      state.hunger = dino.hunger;
      hungerStat.innerHTML = state.hunger;

      pet.classList.toggle("testegg"); //clear images when being fed
      pet.classList.toggle("eggeating"); //shows him eating

      setTimeout(() => {
        pet.classList.toggle("eggeating"); //turn EATING OFF
        pet.classList.toggle("testegg"); //turn testegg BACK ON
      }, 4000);

      console.log(`CRONCH CRONCH YUM!`);
      console.log(`HUNGER: ${dino.hunger}`);
    }
  } else {
    dinoSays.innerHTML = `It's too late to apologize...`;
  }
}

//====================PLAY WITH PET BUTTON=================

function playWithPet() {
  if (dino.isDead === false) {
    if (dino.boredom < 10 && dino.boredom >= 2) {
      dino.boredom -= 2;

      state.boredom = dino.boredom;
      boredomStat.innerHTML = state.boredom;

      pet.classList.toggle("testegg"); //turn testegg OFF
      pet.classList.toggle("eggplaying"); //turn PLAYING ON

      setTimeout(() => {
        pet.classList.toggle("eggplaying"); //turn PLAYING OFF
        if (dino.boredom >= 5 || dino.hunger >= 5 || dino.sleepiness >= 5) {
          pet.classList.toggle("chilling");
        } else {
          pet.classList.toggle("testegg");
        }
      }, 4000);

      console.log(`[Giggles]`);
      console.log(`BOREDOM: ${dino.boredom}`);
    } else if (dino.boredom < 5 && dino.boredom >= 2) {
      dino.boredom -= 2;

      state.boredom = dino.boredom;
      boredomStat.innerHTML = state.boredom;

      pet.classList.toggle("testegg");
      pet.classList.toggle("eggplaying");

      setTimeout(() => {
        pet.classList.toggle("eggplaying");
        pet.classList.toggle("testegg");
      }, 4000);

      console.log(`[giggles]`);
      console.log(`BOREDOM ${dino.boredom}`);
    } else if (dino.boredom === 1) {
      dino.hunger -= 1;

      state.boredom = dino.boredom;
      boredomStat.innerHTML = state.boredom;

      pet.classList.toggle("testegg"); //turn testegg OFF
      pet.classList.toggle("eggplaying"); //turn PLAYING ON

      setTimeout(() => {
        pet.classList.toggle("eggplaying"); //turn PLAYING OFF
        pet.classList.toggle("testegg"); //turn testegg ON
      }, 4000);

      console.log(`[Giggles]`);
      console.log(`BOREDOM: ${dino.boredom}`);
    }
  } else {
    dinoSays.innerHTML = `It's too late to apologize...`;
  }
}

//======================LIGHT SWITCH BUTTON=====================

function lightSwitch() {
  if (dino.isDead === false) {
    if (dino.sleepiness < 10 && dino.sleepiness >= 2) {
      dino.sleepiness -= 2;

      state.sleepiness = dino.sleepiness;
      sleepinessStat.innerHTML = state.sleepiness;

      pet.classList.toggle("testegg"); //turn testegg OFF
      pet.classList.toggle("eggsleeping"); //turn SLEEPING ON
      overlay.classList.toggle("hideContent");

      setTimeout(() => {
        pet.classList.toggle("eggsleeping"); //turn SLEEPING OFF
        overlay.classList.toggle("hideContent");
        if (dino.sleepiness >= 5 || dino.boredom >= 5 || dino.hunger >= 5) {
          pet.classList.toggle("chilling"); //turn testegg ON
        }
      }, 4000);

      console.log(`[passes out]`);
      console.log(`SLEEPINESS: ${dino.sleepiness}`);
      //------------------
    } else if (dino.sleepiness < 5 && dino.sleepiness >= 2) {
      dino.sleepiness -= 2;

      state.sleepiness = dino.sleepiness;
      sleepinessStat.innerHTML = state.sleepiness;

      pet.classList.toggle("testegg"); //turn off
      pet.classList.toggle("eggsleeping"); //ON

      setTimeout(() => {
        pet.classList.toggle("eggsleeping"); //OFF
        pet.classList.toggle("testegg"); //ON
      }, 4000);

      console.log(`[passes out]`);
      console.log(`SLEEPINESS ${dino.sleepiness}`);
    } else if (dino.sleepiness === 1) {
      dino.sleepiness -= 1;

      state.sleepiness = dino.sleepiness;
      sleepinessStat.innerHTML = state.sleepiness;

      pet.classList.toggle("testegg"); //turn testegg OFF
      pet.classList.toggle("eggsleeping"); //turn SLEEPING ON
      overlay.classList.toggle("hideContent");

      setTimeout(() => {
        pet.classList.toggle("eggsleeping"); //turn SLEEPING OFF
        pet.classList.toggle("testegg"); //turn testegg ON
        overlay.classList.toggle("hideContent");
      }, 4000);

      console.log(`[passes out]`);
      console.log(`SLEEPINESS: ${dino.sleepiness}`);
    }
    //----------------------
  } else {
    dinoSays.innerHTML = `It's too late to aplogize...`;
  }
}

//===========================RESTART BUTTON=================================

function reloadPage() {
  window.location.reload();
}

const restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", reloadPage);

//===========================HIDE INSTRUCTIONS================================

//this function will hide the UL by adding a class to it that hides it, AND makes the parent DIV (container where it lives) short

const toggleInstructions = () => {
  const ul = document.querySelector("ul");
  ul.classList.toggle("hideContent");

  const instructions = document.querySelector("#instructions");
  instructions.classList.toggle("shrinkContainer");
};

//=====================================OVERLAY===========================================

//=======================================================================================

//NEXT STEPS:
//STATS ARE NOT BEING UPDATED ON SCREEN
//1.-CHAT BOX: once it dies, I only want the chat box to show the " I died of..." message, nothing else (currently not happening)
//2.-Adjust the times so the game makes more sense
//3.-make light switch functional

//===========================
