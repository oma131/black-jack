let player = {
    name: "Player",
    chips: 200,
    sayHello: function() {
        console.log("Heisann!")
    }
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let statusEl = document.getElementById("status-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let continueEl = document.getElementById("continue-el")
let endGameEl = document.getElementById("endgame-el")

playerEl.textContent = player.name + ": $" + player.chips



function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()

    statusEl.textContent = " "

    newScore = player.chips - 50
    playerEl.textContent = player.name + ": $" + newScore

    if (sum === 21) {
        statusEl.textContent = "You Win🤑🤑🤑"
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

    if (sum === 21) {
        statusEl.textContent = "You Win🤑🤑🤑"
    } else if(sum > 21) { 
        statusEl.textContent = "You're Out☹️☹️☹️"
    }

    if (sum === 21) {
        newScore = player.chips + 100
        playerEl.textContent = player.name + ": $" + newScore
    }
    if (sum > 21) {
        newScore = player.chips * 0
        playerEl.textContent = player.name + ": $" + newScore
    }

    if (sum === 21) {
       endGameEl.style.display = "inline"
    } else {
        endGameEl.style.display = "none"
    }
    
}


function newCard() {
    if (isAlive === true || hasBlackJack === true) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
function endGame() {
    
    endGameEl.style.display = "none"
    if (sum === 21) {
        statusEl.textContent = "Cash Out💰💰💰"
    }
}
