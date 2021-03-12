//////////////////
// Hangman v1.10//
//////////////////


/// Declare global variables
var wordList = ["july", "quartz", "chrysanthemum", "dryad", "helium", "zero", "ward", "error", "maw", "ferrous", "malignant", "pony", "sunshine", "vinegar", "clavicle"]
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var secretWord = ""
space = document.createElement("div")
space.innerHTML = " "
wordRow = document.getElementById("word")
hangCounter = 0
var images = [
  "./images/0.png",
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
  "./images/6.png"
]
var letterQuery = ""
var correctLetters = 0

/////// Functions

function gameInit() {
  // clear board from previous game (if any)  
  resetBoard()
  selectWord() // select a word from the list & split the word into an array of letters
  createWordRow() // create the word row in hmtl
}

function resetBoard() {
  wordRow = document.getElementById("word")
  wordRow.textContent = ""
  document.getElementById("gallows").src = "./images/0.png"
  hangCounter = 0
  correctLetters = 0
  alphabet.forEach(resetLetterBoard)
}

function resetLetterBoard(element) {
  x = document.getElementById(element)
  x.setAttribute("class", "")
  x.setAttribute("onclick", "checkLetter('" + element + "')")
}


function checkLetter(l) {
  letterPresent = false
  letterQuery = l
  secretWord.forEach(letterAppear)
  if (letterPresent == true){
    x = document.getElementById(l)
    x.setAttribute("class", "blue")
    x.setAttribute("onclick", "")
  } else {
    x = document.getElementById(l)
    x.setAttribute("class", "red")
    x.setAttribute("onclick", "")
    hangCounter ++
  }
  changeHangedStatus()
}

function letterAppear(element, index) {
  if (letterQuery == element) {
    letterPresent = true
    letterId = document.getElementById(index)
    letterId.innerHTML = element
    correctLetters++
  }
}

function changeHangedStatus () {
  if (correctLetters == secretWord.length) {
    document.getElementById("gallows").src = "./images/7.png"
    alert("You have escaped the hangman's noose for another day.. Click the New Game button if you'd like to play again.")
  } else if (hangCounter == 6) {
    document.getElementById("gallows").src = images[hangCounter]
    alert("Tragically you have been hanged... The secret word was '" + secretWord.join("") + "'. Click the New Game button if you'd like to play again.")
  } else {
    document.getElementById("gallows").src = images[hangCounter]
  }
  
}

function selectWord () {
  x = randomRange(0, (wordList.length - 1))
  str = wordList[x]
  secretWord = str.split("")
  wordList.splice(x,1)
}

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
}

function createWordRow() {
  wordRow = document.getElementById("word")
  secretWord.forEach(createLetterDiv)
}

function createLetterDiv(element, index) {
  letter = document.createElement("div")
  letter.className = ["secretLetter", element].join(" ")
  letter.innerHTML = "_"
  letter.setAttribute("id", index)
  wordRow.appendChild(letter);
}