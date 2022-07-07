//=========================TAMAGOTCHI============================

class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
    this.age = 0;
  } // End of constructor
}

//===========================INSTANTIATE=================================

const startGame = () => {
  const dino = new Pet("Pol");
  console.log(dino);
  console.log(`${dino.name} has been instantiated`);
};

//===============================STATE================================

const state = {
  isDay: true,
  hunger: null,
  sleepiness: null,
  boredom: null,
  age: null,
};

//=======================START THE GAME=========================

const startButton = document.querySelector("#start-pause");
startButton.addEventListener("click", startGame);

//=============================================================
