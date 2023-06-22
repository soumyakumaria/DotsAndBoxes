
let linesHighlgihted =[]

let winText =""
let allLines =[]
let squares = document.getElementsByClassName('cell')
console.log(squares)
let square1filled = false
let square2filled = false
let square3filled = false
let square5filled = false
let square6filled = false
let square7filled = false
let square9filled = false
let square10filled = false
let square11filled = false
const PLAYER_1_TURN = 1
const PLAYER_2_TURN = 2
const PLAYER_3_TURN = 3

let player1_score = 0
let player2_score = 0
let player3_score = 0
let color = 'yellow'

const playerOneColor ='#FC766AFF';
const playerTwoColor ='#7DB46CFF';
const playerThreeColor='#0063B2FF';
let foundASquare=false;
let squareColored =[]


// Store all the IDs of all the lines in an array to remove the difference between left and top line
// such that both of them can be treated as lines
pushIdInArray()
function pushIdInArray(){
    const topLines= document.getElementsByClassName('topline')
    const leftLines= document.getElementsByClassName('leftline')
    for(let m = 0;m<topLines.length;m++){
        allLines.push(topLines[m].id)
    }
    for(let k = 0;k<leftLines.length; k++){
        allLines.push(leftLines[k].id)
    }
    console.log(allLines)

}



// Function to highlight lines
function highlightLines(i, color){
    document.getElementById(i).style.backgroundColor=color
    linesHighlgihted.push(i)
}

// Function to get the winning player
// If there is a tie no one wins
function getWinner(player1_score, player2_score, player3_score){
    let max = Math.max(player1_score, player2_score, player3_score)
    let scoreList =""
    if(max == player1_score && max != player2_score && max != player3_score){
        console.log("Player 1 is the winner")
        winText = "Player 1 is the winner"
    }
    else if(max == player2_score && max != player1_score && max != player3_score){
        console.log("Player 2 is the winner")
        winText = "Player 2 is the winner"
    }

    else if(max == player3_score && max != player1_score && max != player2_score) {
        console.log("Player 3 is the winner")
        winText = "Player 3 is the winner"
    }
    else {
        console.log("It is a tie.")
        winText = "No one. It is a tie."
    }




}

// Function to check if any of the lines have been clicked on
// https://www.youtube.com/watch?v=XF1_MlZ5l6M
function checkLines(currentPlayer) {

    for (let l = 0; l < allLines.length; l++) {
        let element = document.getElementById(allLines[l])

        console.log(element)
        element.onclick = () =>{
            console.log("Length of square colored "+squareColored.length)
            if(currentPlayer == PLAYER_1_TURN){
                console.log("Player 1 turn")
                highlightLines(allLines[l], playerOneColor)
                detectBoxes(playerOneColor, PLAYER_1_TURN)
                if(foundASquare == true){
                    document.getElementById('result1').innerText = player1_score
                    foundASquare = false
                    // console.log((player1_text))
                    // player1_text.setAttribute('innerHTML',player1_score)
                }
                else {
                    currentPlayer = PLAYER_2_TURN
                }
            }
            else if(currentPlayer == PLAYER_2_TURN){
                console.log("Player 2 turn")
                highlightLines(allLines[l], playerTwoColor)
                detectBoxes(playerTwoColor, PLAYER_2_TURN)
                if(foundASquare == true){
                    document.getElementById('result2').innerText = player2_score
                    foundASquare = false
                }
                else {
                    currentPlayer = PLAYER_3_TURN
                }

            }
            else if (currentPlayer == PLAYER_3_TURN) {
                console.log("Player 3 turn")
                highlightLines(allLines[l], playerThreeColor)
                detectBoxes(playerThreeColor, PLAYER_3_TURN)
                if (foundASquare == true) {
                    document.getElementById('result3').innerText = player3_score
                    foundASquare = false
                }
                else {
                    currentPlayer = PLAYER_1_TURN
                }
            }


        }

    }
}



// Function to change the color of the square and update the score
function changeColorOfSquare(squareId, color){
    document.getElementById(squareId).style.backgroundColor=color
    if(color == playerOneColor){
        player1_score=player1_score+1
        squareColored.push(squareId)
    }
    else if(color == playerTwoColor){
        player2_score = player2_score+1
        squareColored.push(squareId)
    }
    else{
        player3_score = player3_score + 1
        squareColored.push(squareId)
    }
    console.log(squareColored)
    if(squareColored.length==9){
        getWinner(player1_score, player2_score, player3_score)
        let finalScores = "FINAL SCORES player1 - "+player1_score+ " player2 - "+player2_score+" player3 - "+player3_score
        https://www.w3schools.com/js/js_popup.asp
        window.alert("GAME OVER "+"\n"+finalScores+"\n"+"WINNER "+winText)
    }

}


// Function to check if square 1 has been filled
function checkSquare1(color, turn) {
    if (square1filled == false) {
        if (linesHighlgihted.includes('1b') && linesHighlgihted.includes('1a') && linesHighlgihted.includes('2a') && linesHighlgihted.includes('5b')) {
            foundASquare = true;
            const squareOneId = 1
            foundASquare = true;
            changeColorOfSquare(squareOneId, color)
            square1filled = true
        }
    }
}

// Function to check if square 2 has been filled
function checkSquare2(color, turn){
    if (square2filled == false) {
        if (linesHighlgihted.includes('2b') && linesHighlgihted.includes('2a') && linesHighlgihted.includes('3a') && linesHighlgihted.includes('6b')) {
            foundASquare = true;
            const squareOneId = 2
            changeColorOfSquare(squareOneId, color)
            square2filled = true

        }
    }

}

// Function to check if square 3 has been filled
function checkSquare3(color, turn){
    if (square3filled == false) {
        if (linesHighlgihted.includes('3b') && linesHighlgihted.includes('3a') && linesHighlgihted.includes('4a') && linesHighlgihted.includes('7b')) {
            foundASquare = true;
            const squareOneId = 3
            changeColorOfSquare(squareOneId, color)
            square3filled = true


        }
    }
}

// Function to check if square 5 has been filled
function checkSquare5(color, turn){
    if (square5filled == false) {
        if (linesHighlgihted.includes('5b') && linesHighlgihted.includes('5a') && linesHighlgihted.includes('6a') && linesHighlgihted.includes('9b')) {
            foundASquare = true;
            const squareOneId = 5
            changeColorOfSquare(squareOneId, color)
            square5filled = true

        }
    }
}

// Function to check if square 6 has been filled
function checkSquare6(color,turn){
    if (square6filled == false) {
        if (linesHighlgihted.includes('6b') && linesHighlgihted.includes('6a') && linesHighlgihted.includes('7a') && linesHighlgihted.includes('10b')) {
            foundASquare = true;
            const squareOneId = 6
            changeColorOfSquare(squareOneId, color)
            square6filled = true

        }
    }
}

// Function to check if square 7 has been filled
function checkSquare7(color, turn){
    if (square7filled == false) {
        if (linesHighlgihted.includes('7b') && linesHighlgihted.includes('7a') && linesHighlgihted.includes('8a') && linesHighlgihted.includes('11b')) {
            foundASquare = true;
            const squareOneId = 7
            changeColorOfSquare(squareOneId, color)
            square7filled = true

        }
    }
}

// Function to check if square 9 has been filled
function checkSquare9(color, turn){
    if (square9filled == false) {
        if (linesHighlgihted.includes('9b') && linesHighlgihted.includes('9a') && linesHighlgihted.includes('10a') && linesHighlgihted.includes('13b')) {
            foundASquare = true;
            const squareOneId = 9
            changeColorOfSquare(squareOneId, color)
            square9filled = true

        }
    }
}

// Function to check if square 10 has been filled
function checkSquare10(color, turn){
    if (square10filled == false) {
        if (linesHighlgihted.includes('10b') && linesHighlgihted.includes('10a') && linesHighlgihted.includes('11a') && linesHighlgihted.includes('14b')) {
            foundASquare = true;
            const squareOneId = 10
            changeColorOfSquare(squareOneId, color)
            square10filled = true

        }
    }
}

// Function to check if square 11 has been filled
function checkSquare11(color, turn){
    if (square11filled == false) {
        if (linesHighlgihted.includes('11b') && linesHighlgihted.includes('11a') && linesHighlgihted.includes('12a') && linesHighlgihted.includes('15b')) {
            foundASquare = true;
            const squareOneId = 11
            changeColorOfSquare(squareOneId, color)
            square11filled = true

        }
    }
}

// Function to detect boxes and check if the neighboring boxes have been completed
function detectBoxes(color, turn) {
    const squaresReal = document.querySelectorAll('.cell')
    if (square1filled == false) {
       checkSquare1(color, turn)
       checkSquare2(color, turn)
       checkSquare5(color, turn)

    }
    if (square2filled == false) {
        checkSquare2(color, turn)
        checkSquare1(color, turn)
        checkSquare3(color,turn)
        checkSquare6(color, turn)


    }
    if (square3filled == false) {
        checkSquare3(color,turn)
        checkSquare2(color, turn)
        checkSquare7(color, turn)
    }
    if (square5filled == false) {
        checkSquare5(color, turn)
        checkSquare6(color, turn)
        checkSquare1(color, turn)
        checkSquare9(color, turn)



    }
    if (square6filled == false){
        checkSquare6(color, turn)
        checkSquare5(color, turn)
        checkSquare7(color, turn)
        checkSquare10(color, turn)
        checkSquare2(color, turn)


    }
    if(square7filled == false){
        checkSquare7(color, turn)
        checkSquare3(color,turn)
        checkSquare6(color, turn)
        checkSquare11(color, turn)


    }
    if(square9filled == false) {
        checkSquare9(color, turn)
        checkSquare5(color, turn)
        checkSquare10(color, turn)

    }
    if(square10filled == false) {
        checkSquare10(color, turn)
        checkSquare9(color, turn)
        checkSquare6(color, turn)
        checkSquare11(color, turn)

    }

    if(square11filled == false){
        checkSquare11(color, turn)
        checkSquare10(color, turn)
        checkSquare7(color, turn)
    }


}



// play game function to start the game
function playGame(){
    for(let i =0; i<=24; i++) {
        checkLines(PLAYER_1_TURN)
    }
}


playGame()



