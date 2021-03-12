/////////////
// Hangman //
/////////////


/// Declare global variables
var wordList = ["july", "quartz", "chrysanthemum", "dryad", "helium", "zero", "ward", "error", "maw", "ferrous", "malignant", "pony", "sunshine"]
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

/////// Functions

function gameInit() {
  // clear board from previous game (if any)  
  // resetBoard()
  console.log("reset board")
  selectWord() // select a word from the list & split the word into an array of letters
  console.log("select word")
  createWordRow() // create the word row in hmtl
  console.log("create word row")
}

function resetBoard() {
  wordRow.innerHTML = ""
}

function checkLetter(l) {
  letterPresent = false
  letterQuery = l
  secretWord.forEach(letterAppear)
  if (letterPresent == true){
    // make letter appear in word
    

    x = document.getElementById(l)
    x.setAttribute("class", "blue")
    x.setAttribute("onclick", "")
  } else {
    x = document.getElementById(l)
    x.setAttribute("class", "red")
    x.setAttribute("onclick", "")
    hangCounter ++
    changeHangedStatus()
  }
}

function letterAppear(element, index) {
  if (letterQuery == element) {
    letterPresent = true
    letterId = document.getElementById(index)
    letterId.innerHTML = element
  }
}

function changeHangedStatus () {
  document.getElementById("gallows").src = images[hangCounter]
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


// function createWordRow() {
//   wordRow = document.getElementById("word")
//   secretWord.forEach(element[index] => {
//     letter = document.createElement("div")
//     letter.className = ["secretLetter", element].join(" ")
//     letter.innerHTML = "_"
//     letter.setAttribute("cid", index)
//     wordRow.appendChild(letter);
//   })

// }


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