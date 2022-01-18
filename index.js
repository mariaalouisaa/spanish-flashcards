const colours = [
  {
    english: "red",
    spanish: "rojo",
    pronounciaion: "ro-ho",
  },
  {
    english: "blue",
    spanish: "azul",
    pronounciaion: "ah-zul",
  },
  {
    english: "yellow",
    spanish: "amarillo",
    pronounciaion: "ah-ma-ri-yo",
  },
  {
    english: "white",
    spanish: "blanco",
    pronounciaion: "blan-ko",
  },
  {
    english: "orange",
    spanish: "naranja",
    pronounciaion: "na-rang-ha",
  },
  {
    english: "pink",
    spanish: "rosa",
    pronounciaion: "rosa",
  },
  {
    english: "grey",
    spanish: "gris",
    pronounciaion: "gree-s",
  },
  {
    english: "green",
    spanish: "verde",
    pronounciaion: "ver-deh",
  },
  {
    english: "purple",
    spanish: "morado",
    pronounciaion: "mor-ado",
  },
  {
    english: "brown",
    spanish: "marron",
    pronounciaion: "mah - RRon",
  },
];

const animals = [
  {
    english: "cat",
    spanish: "gato",
    pronounciaion: "gat-oh",
  },
  {
    english: "dog",
    spanish: "perro",
    pronounciaion: "pe-RR-oh",
  },
  {
    english: "horse",
    spanish: "caballo",
    pronounciaion: "ka-bay-oh",
  },
  {
    english: "rabbit",
    spanish: "conejo",
    pronounciaion: "con-eh-ho",
  },
  {
    english: "bear",
    spanish: "oso",
    pronounciaion: "os-oh",
  },
  {
    english: "duck",
    spanish: "pato",
    pronounciaion: "pat-oh",
  },
  {
    english: "sheep",
    spanish: "oveja",
    pronounciaion: "oh-ve-hah",
  },
];

const food = [
  {
    english: "apple",
    spanish: "manzana",
    pronounciaion: "mahn-za-na",
  },
  {
    english: "milk",
    spanish: "leche",
    pronounciaion: "leh-CHe",
  },
  {
    english: "juice",
    spanish: "jugo",
    pronounciaion: "hoo-go",
  },
  {
    english: "bread",
    spanish: "pan",
    pronounciaion: "pah-n",
  },
];

const family = [
  {
    english: "mother",
    spanish: "madre",
    pronounciaion: "mah-dreh",
  },
  {
    english: "brother",
    spanish: "hermano",
    pronounciaion: "err-man-oh",
  },
  {
    english: "aunty",
    spanish: "tia",
    pronounciaion: "tee-ah",
  },
  {
    english: "uncle",
    spanish: "tio",
    pronounciaion: "tee-oh",
  },
];

let categorySelected = colours;
const word = document.getElementById("flashcard");
const button = document.getElementById("action-button");
const phonetic = document.getElementById("phonetic");
let flag = document.getElementById("flag-emoji");
let spanish;
let pronounce;

function selectCat(e) {
  e === "animals"
    ? (categorySelected = animals)
    : e === "food"
    ? (categorySelected = food)
    : e === "family"
    ? (categorySelected = family)
    : (categorySelected = colours);
  displayEnglish();
}

function displayEnglish() {
  button.innerHTML = "REVEAL";
  let maxNum = categorySelected.length;
  let randomNum = Math.floor(Math.random() * maxNum);
  word.innerHTML = categorySelected[randomNum].english;
  phonetic.innerHTML = null;
  spanish = categorySelected[randomNum].spanish;
  pronounce = categorySelected[randomNum].pronounciaion;
}

function displaySpanish(e) {
  e.preventDefault();
  if (this.value === "reveal") {
    button.innerHTML = "NEXT";
    word.innerHTML = spanish;
    phonetic.innerHTML = pronounce;
    this.value = "next";
  } else if (this.value === "next") {
    displayEnglish();
    this.value = "reveal";
  }
}

button.addEventListener("click", displaySpanish);

displayEnglish();
