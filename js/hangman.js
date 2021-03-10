/////////////
// Hangman //
/////////////


/// Declare global variables
var wordList = ["july", "quartz", "chrysanthemum"]
var secretWord = ""


/////// Functions

function gameInit() {
  // select a word from the list
  // split the word into an array of letters
  // create the word row in hmtl

}

// listen for letter clicks
  // check if letter is present in secret word
    // reveal letter in word row in html
    //or
    // increase hanged status
  // change letter colour on letter board
  // remove click functionality on letter board
  //check for win or loss

















  function submit () {
    availableHeroes = []
    availableBoards = []
    players = 2
    selectedPlayer = ["N/A", "N/A", "N/A", "N/A"]
    playerCount()
    isChecked()
    setData.forEach (set => createArrays(set))
    if (availableBoards.length === 0 || availableHeroes.length < players) {
      alert("The expansions you have selected don't have enough content to support the number of players you have selected")
      document.location.reload()
    } else {
      selectBoard()
      selectHeroes()
    }
    display("displayPlayer1", "Player 1: ", 0)
    display("displayPlayer2", "Player 2: ", 1)
    display("displayPlayer3", "Player 3: ", 2)
    display("displayPlayer4", "Player 4: ", 3)
    display("displayBoard", "Selected board: ", 0)
  }
  
  function display(htmlId, string, player) {
    if (string == "Selected board: ") {
      let x = document.getElementById(htmlId)
      x.innerHTML = selectedBoard
    }  else if (selectedPlayer[player] != "N/A") {
      let x = document.getElementById(htmlId)
      x.innerHTML = string + selectedPlayer[player]
    } else if (selectedPlayer[player] == "N/A") {
      let x = document.getElementById(htmlId)
      x.innerHTML = ""
    }
  }  

  

  function isChecked() {
    setData[0].inUse = document.getElementById("volOne").checked
    setData[1].inUse = document.getElementById("bruceLee").checked
    setData[2].inUse = document.getElementById("robinHood").checked
    setData[3].inUse = document.getElementById("raptors").checked
    setData[4].inUse = document.getElementById("buffy").checked
    setData[5].inUse = document.getElementById("cobbleAndFog").checked
    setData[6].inUse = document.getElementById("beowulf").checked
  }

  function createArrays (set) {
    if (set["inUse"] == true) {
      for (i = 0; i < set["heroes"].length; i++) {
       availableHeroes.push(set["heroes"][i])
      }
      if (players == 2) {
        for (i = 0; i < set["boards2"].length; i++) {
          availableBoards.push(set["boards2"][i])
        }
      } else {
        for (i = 0; i < set["boards4"].length; i++) {
          availableBoards.push(set["boards4"][i])
        }
      }
    }
  }

  function playerCount() {
    if (document.getElementById('twoPlayers').checked) {
      players = 2
    } else if (document.getElementById('threePlayers').checked) {
      players = 3
    } else {
      players = 4
    }
  }
  
  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
  }

  function selectBoard() {
    selectedBoard = availableBoards[randomRange(0, (availableBoards.length - 1))]
  }

  function selectHeroes() {
    for (i = 0; i < players; i++) {
      x = randomRange(0, (availableHeroes.length - 1))
      selectedPlayer[i] = availableHeroes[x]
      availableHeroes.splice(x,1) //Removes selected hero from available pool to avoid duplication
    }
  }