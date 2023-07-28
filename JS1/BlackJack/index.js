let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(min, max) {
   return Math.floor(Math.random() * (max + 1 - min) + min)
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard(2,12)
    let secondCard = getRandomCard(2,12)
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    
    if (hasBlackJack) {
        player.chips += 20
    } else if (!isAlive) {
        player.chips -= 5
    }
    playerEl.textContent = player.name + ": $" + player.chips
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard(2,12)
        sum += card
        cards.push(card)
        renderGame()        
    }
}