
function generateRandomLetter() {
    const alphabet = "RSP"

    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function determinator(pChoice){
    whoWins(pChoice,generateRandomLetter())

}

function whoWins(pChoice, aiChoice){
    console.log(aiChoice)
    document.getElementById("aiPick").innerHTML = "AI picked: "+ aiChoice + "."
    if(pChoice === "P" && aiChoice === "R"){
        document.getElementById("result").innerHTML = "You won"
    }
    if(pChoice === "R" && aiChoice === "S"){
        document.getElementById("result").innerHTML = "You won"
    }
    if(pChoice === "S" && aiChoice === "P"){
        document.getElementById("result").innerHTML = "You won"
    }
    if(pChoice == aiChoice){
        document.getElementById("result").innerHTML = "Its a draw!"
    }
    if(pChoice ==="S" && aiChoice ==="R" || pChoice ==="R" &&aiChoice==="P" || pChoice==="P" && aiChoice === "S"){
        document.getElementById("result").innerHTML = "You´ve lost"
    }
}