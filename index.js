const colours = [
  {
    english: "black",
    spanish: "negro",
    pronounciaion: "NAY-groh",
  },
  {
    english: "white",
    spanish: "blanco",
    pronounciaion: "BLAHN-koh",
  },
  {
    english: "grey",
    spanish: "gris",
    pronounciaion: "GREESS",
  },
  {
    english: "red",
    spanish: "rojo",
    pronounciaion: "ROH-hoh",
  },
  {
    english: "blue",
    spanish: "azul",
    pronounciaion: "ah-SOOL",
  },
  {
    english: "navy blue",
    spanish: "azul marino",
    pronounciaion: "a-SOOL ma-reeno",
  },
  {
    english: "yellow",
    spanish: "amarillo",
    pronounciaion: "AH-mah-REE-yoh",
  },
  {
    english: "green",
    spanish: "verde",
    pronounciaion: "BER-day",
  },
  {
    english: "orange",
    spanish: "naranja",
    pronounciaion: "nar-AHN-hah",
  },
  {
    english: "purple",
    spanish: "morado",
    pronounciaion: "moor-AH-do",
  },
  {
    english: "cream",
    spanish: "crema",
    pronounciaion: "krema",
  },
  {
    english: "pink",
    spanish: "rosa",
    pronounciaion: "rosa",
  },
  {
    english: "violet",
    spanish: "violeta",
    pronounciaion: "vee-oh-LEH-tah",
  },
  {
    english: "brown",
    spanish: "marrón",
    pronounciaion: "mah-RON",
  },
  {
    english: "dark brown",
    spanish: "café",
    pronounciaion: "kah-FAY",
  },
  {
    english: "silver",
    spanish: "plateado",
    pronounciaion: "pla-te-ado",
  },
  {
    english: "gold",
    spanish: "dorado",
    pronounciaion: "do-rado",
  },
  {
    english: "light",
    spanish: "claro",
    pronounciaion: "cla-ROH",
  },
  {
    english: "dark",
    spanish: "oscuro",
    pronounciaion: "ocs-oor-ROH",
  },
  {
    english: "colour",
    spanish: "el color",
    pronounciaion: "el kol-or",
  },
];

const animals = [
  {
    english: "cow",
    spanish: "vaca",
    pronounciaion: "bah-kah",
  },
  {
    english: "dog",
    spanish: "perro",
    pronounciaion: "peh-RRoh",
  },
  {
    english: "cat",
    spanish: "gato",
    pronounciaion: "gat-oh",
  },
  {
    english: "sheep",
    spanish: "oveja",
    pronounciaion: "oh-beh-hah",
  },
  {
    english: "pig",
    spanish: "cerdo",
    pronounciaion: "sehr-doh",
  },
  {
    english: "horse",
    spanish: "caballo",
    pronounciaion: "kah-bah-yoh",
  },
  {
    english: "duck",
    spanish: "pato",
    pronounciaion: "pah-toh",
  },
  {
    english: "donkey",
    spanish: "burro",
    pronounciaion: "boo-RRoh",
  },
  {
    english: "elephant",
    spanish: "elefante",
    pronounciaion: "eh-leh-fahn-teh",
  },
  {
    english: "zebra",
    spanish: "cebra",
    pronounciaion: "seh-brah",
  },
  {
    english: "monkey",
    spanish: "mono",
    pronounciaion: "moh-noh",
  },
  {
    english: "tiger",
    spanish: "tigre",
    pronounciaion: "tee-greh",
  },
  {
    english: "bear",
    spanish: "oso",
    pronounciaion: "oh-soh",
  },
  {
    english: "giraffe",
    spanish: "jirafa",
    pronounciaion: "hee-rah-fah",
  },
  {
    english: "lion",
    spanish: "león",
    pronounciaion: "leh-ohn",
  },
  {
    english: "hen",
    spanish: "gallina",
    pronounciaion: "gah-yee-nah",
  },
  {
    english: "crocodile",
    spanish: "crocodrillo",
    pronounciaion: "koh-koh-dree-loh",
  },
  {
    english: "rooster",
    spanish: "gallo",
    pronounciaion: "gah-yoh",
  },
  {
    english: "rabbit",
    spanish: "conejo",
    pronounciaion: "koh-NEH-hoh",
  },
  {
    english: "crab",
    spanish: "cangrejo",
    pronounciaion: "kahng-greh-hoh",
  },
];

const food = [
  {
    english: "juice",
    spanish: "jugo",
    pronounciaion: "HOO-goh",
  },
  {
    english: "lemon",
    spanish: "limón",
    pronounciaion: "lee-mohn",
  },
  {
    english: "apple",
    spanish: "manzana",
    pronounciaion: "mahn-SAH-nah",
  },
  {
    english: "pear",
    spanish: "pera",
    pronounciaion: "PEH-rah",
  },
  {
    english: "strawberry",
    spanish: "fresa",
    pronounciaion: "fre-sah",
  },
  {
    english: "orange",
    spanish: "naranja",
    pronounciaion: "nah-rahn-hah",
  },
  {
    english: "watermelon",
    spanish: "sandia",
    pronounciaion: "sahn-DEE-ah",
  },
  {
    english: "salt",
    spanish: "sal",
    pronounciaion: "sahl",
  },
  {
    english: "pepper",
    spanish: "pimienta",
    pronounciaion: "pee-mee-EHN-tah",
  },
  {
    english: "chicken",
    spanish: "pollo",
    pronounciaion: "POH-yoh",
  },
  {
    english: "seafood",
    spanish: "mariscos",
    pronounciaion: "mah-REES-kohs",
  },
  {
    english: "beef",
    spanish: "res",
    pronounciaion: "rehs",
  },
  {
    english: "pork",
    spanish: "cerdo",
    pronounciaion: "serh-doh",
  },
  {
    english: "onion",
    spanish: "cebolla",
    pronounciaion: "seh-boh-ya",
  },
  {
    english: "garlic",
    spanish: "ajo",
    pronounciaion: "AH-hoh",
  },
  {
    english: "totato",
    spanish: "tomate",
    pronounciaion: "toh-MAH-teh",
  },
  {
    english: "rice",
    spanish: "arroz",
    pronounciaion: "ah-ROHS",
  },
  {
    english: "fruit",
    spanish: "fruta",
    pronounciaion: "FROO-tah",
  },
  {
    english: "vegetables",
    spanish: "verduras",
    pronounciaion: "vehr-DOO-rahs",
  },
  {
    english: "lettuce",
    spanish: "lechuga",
    pronounciaion: "leh-CHOO-gah",
  },
];

const family = [
  {
    english: "mother",
    spanish: "madre",
    pronounciaion: "mah-dray",
  },
  {
    english: "father",
    spanish: "padre",
    pronounciaion: "pah-dray",
  },
  {
    english: "brother",
    spanish: "hermano",
    pronounciaion: "err-man-oh",
  },
  {
    english: "sister",
    spanish: "hermana",
    pronounciaion: "err-man-ah",
  },
  {
    english: "siblings",
    spanish: "hermanos",
    pronounciaion: "err-man-ohs",
  },
  {
    english: "grandmother",
    spanish: "abuela",
    pronounciaion: "ah-BWEL-ah",
  },
  {
    english: "grandfather",
    spanish: "abuelo",
    pronounciaion: "ah-BWEL-oh",
  },
  {
    english: "aunty",
    spanish: "tía",
    pronounciaion: "tee-ah",
  },
  {
    english: "uncle",
    spanish: "tío",
    pronounciaion: "tee-oh",
  },
  {
    english: "grandparents",
    spanish: "abuelos",
    pronounciaion: "ah-BWEL-ohs",
  },
  {
    english: "family",
    spanish: "familia",
    pronounciaion: "fa-mee-lee-ah",
  },
  {
    english: "step-mum",
    spanish: "madrastra",
    pronounciaion: "mah-dras-trah",
  },
  {
    english: "step-dad",
    spanish: "padrastro ",
    pronounciaion: "pah-dras-troh",
  },
  {
    english: "half sister",
    spanish: "media hermana",
    pronounciaion: "meh-dee-a err-man-ah",
  },
  {
    english: "half brother",
    spanish: "medio hermano",
    pronounciaion: "meh-dee-oh err-man-oh",
  },
  {
    english: "cousin",
    spanish: "prima/o",
    pronounciaion: "pree-mah/moh",
  },
  {
    english: "neice",
    spanish: "sobrina",
    pronounciaion: "soh-brEE-nah",
  },
  {
    english: "nephew",
    spanish: "sobrino",
    pronounciaion: "soh-brEE-noh",
  },
  {
    english: "daughter",
    spanish: "hija",
    pronounciaion: "EE-hah",
  },
  {
    english: "son",
    spanish: "hijo",
    pronounciaion: "EE-hoh",
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
