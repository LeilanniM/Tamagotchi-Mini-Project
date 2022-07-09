//=========================TAMAGOTCHI============================

//===============================STATE================================

const state = {
  hungerCount: null,
  ageCount: null,
  boredomCount: null,
  sleepinessCount: null,
};

//--------STATS
const hungerStat = document.querySelector("#hungerStat");
const boredomStat = document.querySelector("#boredomStat");
const sleepinessStat = document.querySelector("#sleepinessStat");
//---------DINO SAYS

const itHatched = document.querySelector("#itHatched");
const deathMessage = document.querySelector("#deathMessage");
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

  hatch = () => {
    itHatched.innerHTML = "🐣 I've Hatched!!";
    console.log(`${this.name} has hatched!`);

    pet.classList.toggle("egg"); //we bring the hatching egg GIF
    setTimeout(() => {
      //4 second later
      pet.classList.toggle("egg"); //turn hatching egg GIF off
      pet.classList.toggle("rolling"); //turn rolling egg GIF on
      itHatched.innerHTML = ""; //"I've hatched" goes away"
    }, 4000);

    //================= ⏰ starting all intervals (that live inside my state object)======================
    state.ageCount = setInterval(this.ageUp, 20000); //starts aging after 4 seconds of being hatched
    state.hungerCount = setInterval(this.getsHungry, 10000); //hunger starts increasing
    state.boredomCount = setInterval(this.getsBored, 12000); //boredom starts increasing
    state.sleepinessCount = setInterval(this.getsSleepy, 15000); //sleepiness starts increasing
  }; //-------------hatch() FUNCTION ENDS
  //============================

  evolve = () => {
    clearInterval(state.ageCount); //stop ALL the counting (Intervals)
    clearInterval(state.hungerCount);
    clearInterval(state.boredomCount);
    clearInterval(state.sleepinessCount);

    dinoSays.innerHTML = "";
    disableButtons();
    dinoSays.innerHTML = `I'm evolving`;

    pet.removeAttribute("class"); //so it doesnt matter what EGG is doing, it will be removed once it dies
    pet.classList.toggle("eggevolves");

    setTimeout(() => {
      pet.removeAttribute("class");
      pet.classList.toggle("eggevolution");
      dinoSays.innerHTML = `I'm a grown Egg now, it's time for me to see the world`;

      document.getElementById("stats").style.height = "169px";

      hungerStat.innerHTML = "<p>Too old to be fed by you</p>";
      boredomStat.innerHTML = "<p>Lets grab a beer some time</p>";
      sleepinessStat.innerHTML = "<p>Sleeping? In this economy?</p>";
    }, 4000);
  };

  //===========================

  ageUp = () => {
    this.age += 1;

    dinoSays.innerHTML = `🎂  I just turned ${this.age} !! `;
    console.log(`${this.name} just turned ${this.age}`);

    if (this.age === 5) {
      this.evolve();
    }
  }; //--------ageUp() METHOD ENDS
  //============================

  getsHungry = () => {
    this.hunger += 1;

    hungerStat.innerHTML = this.hunger; //updating hunger stats
    console.log(`HUNGER: ${this.hunger}`);

    if (this.hunger === 10) {
      deathMessage.innerHTML = "I died of hunger 💀";
      console.log(`Death by hunger 💀`);

      dinoSays.innerHTML = ""; //so PET chat clears once it dies, and all it does after is let us know it is dead.

      this.isDead = true;

      pet.removeAttribute("class"); //so it doesnt matter what EGG is doing, it will be removed once it dies
      pet.classList.toggle("eggdied"); //TURN ON EGG DYING

      disableButtons(); //DISABLE FEED, PLAY with and put to SLEEP BUTTONS

      clearInterval(state.ageCount); //stop ALL the counting (Intervals) once it dies
      clearInterval(state.hungerCount);
      clearInterval(state.boredomCount);
      clearInterval(state.sleepinessCount);

      startButton.innerHTML = `TRY AGAIN`;
    } else if (this.hunger >= 3) {
      dinoSays.innerHTML = "FEED ME, FEEED MEEEE!!!!";
      console.log(`FEED ME, FEED MEEEEE!!!`);
    }
  }; //-------------- getsHungry() FUNCTION ENDS
  //============================

  getsBored = () => {
    this.boredom += 1;

    boredomStat.innerHTML = this.boredom; //updating boredom stats in stats window
    console.log(`BOREDOM: ${this.boredom}`);

    if (this.boredom === 10) {
      deathMessage.innerHTML = "I died of boredom 💀";
      console.log(`Death by boredom 💀`);
      dinoSays.innerHTML = ""; //so PET chat clears once is it dies, and all it does after is let us know it is dead.

      this.isDead = true;

      pet.removeAttribute("class"); //so it doesnt matter what EGG is doing, it will be removed once it dies
      pet.classList.toggle("eggdied"); //TURN ON EGG DYING

      disableButtons(); //DISABLE FEED, PLAY with and put to SLEEP BUTTONS

      clearInterval(state.ageCount);
      clearInterval(state.hungerCount);
      clearInterval(state.boredomCount);
      clearInterval(state.sleepinessCount);

      startButton.innerHTML = `TRY AGAIN`;
    } else if (this.boredom >= 3) {
      dinoSays.innerHTML = "PLAY WITH ME, PLAAAY WIIITH MEEE AAAAH!!!";
      console.log(`PLAY WITH ME, PLAAAY WIIITH MEEE AAAAH!!!`);
    }
  }; //------------getsBored() FUNCTION ENDS
  //============================

  getsSleepy = () => {
    this.sleepiness += 1;

    sleepinessStat.innerHTML = this.sleepiness; //updating sleepiness stats
    console.log(`SLEEPINESS: ${this.sleepiness}`);

    if (this.sleepiness === 10) {
      deathMessage.innerHTML = "I died of sleepiness 💀";
      console.log(`Death by sleepiness 💀`);

      dinoSays.innerHTML = ""; //so PET chat clears once is it dies, and all it does after is let us know it is dead.

      this.isDead = true;

      pet.removeAttribute("class"); //so it doesnt matter what EGG is doing, it will be removed once it dies
      pet.classList.toggle("eggdied"); //switches to egg dying GIF

      disableButtons(); //DISABLE FEED, PLAY with and put to SLEEP BUTTONS

      clearInterval(state.ageCount);
      clearInterval(state.hungerCount);
      clearInterval(state.boredomCount);
      clearInterval(state.sleepinessCount);

      startButton.innerHTML = `TRY AGAIN`;
    } else if (this.sleepiness >= 3) {
      dinoSays.innerHTML = "YAAAAAAAAWWWWWWNNNN!!! 🥱";
      console.log(`YAAAAAAAAWWWWWWNNNN 🥱`);
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
    //whem START turns into TRY AGAIN, if you hit it, enter the bracket
    dino.age = 0;
    dino.hunger = 1;
    dino.boredom = 1;
    dino.sleepiness = 1;
    dino.isDead = false;

    state.hungerCount = null;
    state.ageCount = null;
    state.boredomCount = null;
    state.sleepinessCount = null;

    hungerStat.innerHTML = dino.hunger; //showing initial value on hunger stats
    boredomStat.innerHTML = dino.boredom; //showing initial value on boredom stats
    sleepinessStat.innerHTML = dino.sleepiness; //showing initial value on sleepiness stats
    dinoSays.innerHTML = "";
    itHatched.innerHTML = "";
    deathMessage.innerHTML = "";

    dino.hatch();
  } else {
    petName = prompt("Give your pet a proper name", "type name"); //grabs users input
    dino = new Pet(petName.toUpperCase()); //turns it into uppercase
    petNameStat.innerHTML = dino.name; //updates the chat box with new name

    hungerStat.innerHTML = dino.hunger; //showing initial value on hunger stats
    boredomStat.innerHTML = dino.boredom; //showing initial value on boredom stats
    sleepinessStat.innerHTML = dino.sleepiness; //showing initial value on sleepiness stats

    console.log(`${dino.name} has been instantiated`);
    dino.hatch(); //hatch egg
  }
};

//==========================START THE GAME===========================

const startButton = document.querySelector("#start-pause"); //grabbing the button from HTML
startButton.addEventListener("click", startGame); //so that everytime it is clicked, it runs the function startGame()

//====================================================================
//========================PET OWNER'S DUTIES==========================
//====================================================================
//==================FEED BUTTON==============================

function feedPet() {
  if (dino.isDead === false && dino.hunger >= 2) {
    disableButtons();

    dino.hunger -= 2;

    hungerStat.innerHTML = dino.hunger;

    pet.removeAttribute("class"); //removes all GIFs (classes)
    pet.classList.add("eggeating"); //starts eating, turns EATING GIF (ON)

    setTimeout(() => {
      pet.classList.toggle("eggeating"); //turn EATING OFF after 4 secs
      pet.classList.toggle("rolling"); //after its done eating, if its hunger levels are below 5 it will go back to rolling (rolling)
      enableButtons();
    }, 4000);

    console.log(`CRONCH CRONCH YUM`);
    console.log(`HUNGER: ${dino.hunger}`);
  }
}

//====================PLAY WITH PET BUTTON=================

function playWithPet() {
  if (dino.isDead === false && dino.boredom >= 2) {
    disableButtons();

    dino.boredom -= 2;

    boredomStat.innerHTML = dino.boredom;

    pet.removeAttribute("class"); //removes all GIFs (classes)
    pet.classList.toggle("eggplaying"); //turn PLAYING ON

    setTimeout(() => {
      pet.classList.toggle("eggplaying"); //turn PLAYING OFF
      pet.classList.toggle("rolling");
      enableButtons();
    }, 4000);

    console.log(`[Giggles]`);
    console.log(`BOREDOM: ${dino.boredom}`);
  }
}

//======================LIGHT SWITCH BUTTON=====================

function lightSwitch() {
  if (dino.isDead === false && dino.sleepiness >= 2) {
    disableButtons();

    dino.sleepiness -= 2;

    sleepinessStat.innerHTML = dino.sleepiness;

    pet.removeAttribute("class"); //removes all GIFs (classes)
    pet.classList.toggle("eggsleeping"); //turn SLEEPING ON
    overlay.classList.toggle("hideContent");

    setTimeout(() => {
      pet.classList.toggle("eggsleeping"); //turn SLEEPING OFF
      overlay.classList.toggle("hideContent");
      pet.classList.toggle("rolling"); //after its done sleeping, if its sleepiness levels are below 5 it will go back to rolling (rolling)
      enableButtons();
    }, 4000);

    console.log(`[passes out]`);
    console.log(`SLEEPINESS: ${dino.sleepiness}`);
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
